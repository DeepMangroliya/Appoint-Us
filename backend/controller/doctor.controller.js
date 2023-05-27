const adminModel = require("../model/admin.model.js");
const patientModel = require("../model/patient.model");
const doctorModel = require("../model/doctor.modal");

const bcrypt = require("bcrypt");
const createToken = require("../common/create.Token");
const { messages, http_code } = require("../constant/index.constant");

class doctorController {
  static register = async (req, res) => {
    try {
      const ifMainExist = await doctorModel.findOne({
        email: req.body.email,
      });
      if (!ifMainExist) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        var _saved = {
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          graduation: req.body.graduation,
          mobile: req.body.mobile,
          address: req.body.address,
          department: req.body.department,
          isVerified: req.body.isVerified,
        };
        // if (req.files.length && req.files) {
        //   _saved.profile = req.files[0].myfilepath;
        // }
        const result = await doctorModel(_saved).save();
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

  static updateDoctor = async (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    try {
      const updatedData = await doctorModel.findByIdAndUpdate(id, req.body, {
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
  static deleteDoctor = async (req, res) => {
    console.log("called");
    const id = req.params.id;
    const doctor = await doctorModel.findByIdAndDelete(id);
    res.json(doctor);
  };

  static login = async (req, res) => {
    console.log(req.body.email);
    const user = await doctorModel.findOne({ email: req.body.email });
    console.log(user);
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
  static doctors = async (req, res) => {
    const { isVerified } = req.query;
    const { id } = req.query;
    if (isVerified) {
      console.log("INSIDE IF");
      const users = await doctorModel.find({ isVerified: "pending" });
      return res.json({
        data: users,
        message: messages.blank,
        status: http_code.ok,
      });
    } else if (id) {
      console.log("INSIDE else IF");
      const users = await doctorModel.findById(id);
      console.log(users);
      return res.json({
        data: users,
        message: messages.blank,
        status: http_code.ok,
      });
    } else {
      console.log("INSIDE ELSE");
      const users = await doctorModel.find({});
      console.log(users);
      return res.json({
        data: users,
        message: messages.blank,
        status: http_code.ok,
      });
    }
  };
  static getDoctor = async (req, res) => {
    try {
      let id = req.body.id;
      console.log(id);
      const result = await doctorModel.findById(id);
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

module.exports = doctorController;
