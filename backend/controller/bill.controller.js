const adminModel = require("../model/admin.model.js");
const patientModel = require("../model/patient.model");
const doctorModel = require("../model/doctor.modal");
const appointmentModel = require("../model/appointment.model");
const billModel = require("../model/bill.model");
const bcrypt = require("bcrypt");
const createToken = require("../common/create.Token");
const { messages, http_code } = require("../constant/index.constant");
const razorpay = require("razorpay");
const crypto = require("crypto");

class billController {
  static generateBill = async (req, res) => {
    try {
      var _saved = req.body;
      const result = await billModel(_saved).save();
      var aid = req.body.appointmentId;
      const update = await appointmentModel.findByIdAndUpdate(aid, {
        isDischarged: true,
      });
      console.log(update);
      return res.json({
        data: result,
        message: messages.blank,
        status: http_code.ok,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static getEBill = async (req, res) => {
    try {
      const id = req.query.id;
      const result = await billModel.findById(id);
      return res.json({
        data: result,
        message: messages.blank,
        status: http_code.ok,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static getEBillByAppointmentId = async (req, res) => {
    try {
      const id = req.query.id;
      // console.log(id);
      const result = await billModel.find({ appointmentId: id });
      // console.log(result);
      return res.json({
        data: result,
        message: messages.blank,
        status: http_code.ok,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static getEBillByPatient = async (req, res) => {
    try {
      const id = req.query.id;
      console.log(id);
      const result = await billModel
        .find({ patientId: id })
        .populate("patientId")
        .populate("doctorId");
      console.log(result);
      return res.json({
        data: result,
        message: messages.blank,
        status: http_code.ok,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static order = async (req, res) => {
    try {
      const instance = new razorpay({
        key_id: process.env.KEY_ID,
        key_secret: process.env.KEY_SECRET,
      });

      const options = {
        amount: req.body.amount * 100,
        currency: "INR",
        // reciept: crypto.randomBytes(10).toString("hex"),
      };
      instance.orders.create(options, (error, order) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "something went wrong!" });
        }
        res.status(200).json({ data: order });
      });
    } catch (error) {
      res.status(500).json({ message: "something went wrong!" });
      console.log(error);
    }
  };
  static verify = async (req, res) => {
    try {
      console.log(req.body);
      // console.log(req.body.appointmentId, "from verify");
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        appointmentId,
      } = req.body;
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto
        .createHmac("sha256", process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");
      if (razorpay_signature === expectedSign) {
        const result = await billModel.findOneAndUpdate(
          { appointmentId: appointmentId },
          { $set: { isPaymentDone: true } },
          { new: true }
        );
        console.log(result);
        return res
          .status(200)
          .json({ message: "Payment verified successfully!" });
      } else {
        return res.status(400).json({ message: "Invalid signature!" });
      }
    } catch (error) {
      res.status(500).json({ message: "something went wrong!" });
      console.log(error);
    }
  };
}

module.exports = billController;
