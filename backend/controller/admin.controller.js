const adminModel = require("../model/admin.model.js");
const patientModel = require("../model/patient.model");
const doctorModel = require("../model/doctor.modal");
var multer = require("multer");
const bcrypt = require("bcrypt");
const createToken = require("../common/create.Token");
const { messages, http_code } = require("../constant/index.constant");
const appointmentModel = require("../model/appointment.model.js");

class adminController {
  static register = async (req, res) => {
    try {
      const ifMainExist = await adminModel.findOne({ email: req.body.email });
      if (!ifMainExist) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        var _saved = {
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          phone: req.body.phone,
        };
        console.log(req.body);
        // if (req.files.length && req.files) {
        //   _saved.profile = req.files[0].myfilepath;
        // }
        const admin = new adminModel(_saved);
        await admin.save();
        // const result = adminModel(_saved).save();
        return res.json({
          data: admin,
          message: messages.blank,
          status: http_code.ok,
        });
      } else {
        return res.json({
          data: {},
          message: messages.useralresyexist,
          status: http_code.error,
        });
      }
    } catch (error) {
      console.log(error);
      // console.log(error.errors[0]);
      // return res.send(error.errors);
      // let error = `${} is required`
      res.status(500).send(error.errors);
    }
  };
  static changeVerification = async (req, res) => {
    try {
      const id = req.params.id;
      // console.log(req.params.id);
      // console.log(id);
      if (req.query.isVerified === "approved") {
        try {
          // console.log("INSIDE APPROVED_");
          const result = await doctorModel.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          // console.log(result);
          return res.json({
            data: result,
            message: "Approved",
            status: http_code.ok,
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        // console.log(req.query.isVerified);
        // console.log("INSIDE ELSE");
        await doctorModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        return res.json({
          // data: result,
          message: "Rejected",
          status: http_code.ok,
        });
      }
    } catch (error) {
      console.log(error);
    }
    // res.send(req.query.isVerified);
  };
  static changeAppointmentVerification = async (req, res) => {
    try {
      const id = req.params.id;
      // console.log("id 1");
      if (req.query.isApproved === "approved") {
        try {
          console.log("INSIDE APPROVED1");
          const result = await appointmentModel.findByIdAndUpdate(id, {
            isApproved: "approved",
          });
          return res.json({
            data: result,
            message: "Approved",
            status: http_code.ok,
          });
        } catch (error) {
          console.log(error);
        }
      } else if (req.query.isApproved === "rejected") {
        // console.log(req.query.isApproved);
        // console.log("INSIDE ELSE");
        await appointmentModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        return res.json({
          // data: result,
          message: "Rejected",
          status: http_code.ok,
        });
      }
      // else if (req.query.isDischarged === true) {
    } catch (e) {
      console.log(e);
    }
    // res.send(req.query.isApproved);
  };

  static upload = async (req, res) => {
    res.send("hello");
  };
  static dischargePatient = async (req, res) => {
    try {
      const id = req.params.id;
      // console.log(id);
      // console.log(id);
      const result = await appointmentModel.findByIdAndUpdate(
        id,
        { isDischarged: true },
        {
          new: true,
        }
      );
      return res.json({
        data: result,
        message: "Discharged",
        status: http_code.ok,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static dischargePatients = async (req, res) => {
    try {
      const result = await appointmentModel
        .find({ isDischarged: false })
        .populate("userId")
        .populate("doctorId");
      return res.json({
        data: result,
        message: "",
        status: http_code.ok,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static getAdmin = async (req, res) => {
    try {
      let id = req.body.id;
      console.log(id);
      const result = await adminModel.findById(id);
      // .populate("userId")
      // .populate("doctorId");
      return res.json({
        data: result,
        message: "",
        status: http_code.ok,
      });
    } catch (error) {
      console.log(error);
    }
  };

  static login = async (req, res) => {
    const user = await adminModel.findOne({ email: req.body.email });
    try {
      if (user) {
        const validpassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (validpassword) {
          var data = {
            email: user.email,
            _id: user._id,
            phone: user.phone,
          };
          const token = await createToken(data);
          return res.json({
            data: { ...user._doc, token: token },
            message: messages.blank,
            status: http_code.ok,
          });
        } else {
          return res.json({
            data: {},
            message: messages.invalidpassword,
            status: http_code.forbidden,
          });
        }
      } else {
        return res.json({
          data: {},
          message: messages.userdoesnotexist,
          status: http_code.forbidden,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = adminController;
