const adminModel = require("../model/admin.model.js");
const patientModel = require("../model/patient.model");
const doctorModel = require("../model/doctor.modal");

const bcrypt = require("bcrypt");
const createToken = require("../common/create.Token");
const { messages, http_code } = require("../constant/index.constant");

class patientController {
  static register = async (req, res) => {
    try {
      console.log("req.body");
      // console.log(req.body);
      const ifMainExist = await patientModel.findOne({ email: req.body.email });
      if (!ifMainExist) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        var _saved = {
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          phone: req.body.phone,
          symptom: req.body.symptom,
          address: req.body.address,
        };
        // if (req.files.length && req.files) {
        //   _saved.profile = req.files[0].myfilepath;
        // }
        const result = await patientModel(_saved).save();
        return res.json({
          data: result,
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
    }
  };
  static hello = async (req, res) => {
    res.send("hello");
  };

  static login = async (req, res) => {
    const user = await patientModel.findOne({ email: req.body.email });
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
  };

  static patients = async (req, res) => {
    const { id } = req.query;
    if (id) {
      console.log("INSIDE else IF");
      const users = await patientModel.findById(id);
      console.log(users);
      return res.json({
        data: users,
        message: messages.blank,
        status: http_code.ok,
      });
    } else {
      console.log("INSIDE ELSE");
      const users = await patientModel.find({});
      console.log(users);
      return res.json({
        data: users,
        message: messages.blank,
        status: http_code.ok,
      });
    }
  };

  static updatePatient = async (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    try {
      const updatedData = await patientModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json({
        data: updatedData,
        message: messages.blank,
        status: http_code.error,
      });
    } catch (error) {
      res.json({ data: {}, message: messages.blank, status: http_code.error });
    }
  };
  static deletePatient = async (req, res) => {
    console.log("called");
    const id = req.params.id;
    const doctor = await patientModel.findByIdAndDelete(id);
    res.json(doctor);
  };

  static getPatient = async (req, res) => {
    try {
      let id = req.body.id;
      console.log(id);
      const result = await patientModel.findById(id);
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
}

module.exports = patientController;
