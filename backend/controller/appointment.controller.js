const { messages, http_code } = require("../constant/index.constant");
const appointmentModel = require("../model/appointment.model");
const doctorModal = require("../model/doctor.modal");
const patientModel = require("../model/patient.model");
class appointmentController {
  static appointment = async (req, res) => {
    try {
      const data = req.body.userId;
      // console.log(data);
      const doctordata = await doctorModal.findById(req.body.doctorId);
      // console.log(doctordata);
      var _saved = {
        doctorId: req.body.doctorId,
        description: req.body.description,
        userId: data,
        isApproved: req.body.isApproved,
        // isDischarged: req.body.isDischarged,
      };
      const result = new appointmentModel(_saved);
      await result.save();

      // const result = await appointmentModel(_saved).save();
      return res.json({
        data: result,
        message: messages.blank,
        code: http_code.ok,
      });
    } catch (error) {
      // console.log(error);
    }
  };
  static appointments = async (req, res) => {
    const { isApproved } = req.query;
    // console.log(isApproved);
    if (isApproved) {
      const appointments = await appointmentModel
        .find({
          isApproved: "pending",
        })
        .populate("userId")
        .populate("doctorId");
      // console.log(appointments);
      return res.json({
        data: appointments,
        message: messages.blank,
        status: http_code.ok,
      });
    } else if (req.query.isDischarged) {
      const appointments = await appointmentModel
        .find({
          isDischarged: false,
        })
        .populate("userId")
        .populate("doctorId");
      // console.log("appointments");
      // console.log(appointments);
      return res.json({
        data: appointments,
        message: messages.blank,
        status: http_code.ok,
      });
    } else {
      const appointments = await appointmentModel
        .find()
        .populate("doctorId")
        .populate("userId");
      // console.log(appointments);
      return res.json({
        data: appointments,
        message: messages.blank,
        status: http_code.ok,
      });
    }
  };
  static appointmentWithUser = async (req, res) => {
    try {
      // console.log("inside");
      const a = req.query.doctorId;
      console.log("a", a);
      if (a) {
        const userDetails = await appointmentModel
          .find({ doctorId: a })
          .populate("userId");
        console.log("userDetails", userDetails);
        return res.json({
          data: userDetails,
          message: messages.blank,
          status: http_code.ok,
        });
      }
    } catch (error) {
      // console.log(error);
    }
  };
  static appointmentsByuser = async (req, res) => {
    try {
      const a = req.query.userId;
      // console.log(a);
      if (a) {
        const userDetails = await appointmentModel
          .find({ userId: a })
          .populate("doctorId");
        // console.log(userDetails);
        return res.json({
          data: userDetails,
          message: messages.blank,
          status: http_code.ok,
        });
      }
    } catch (error) {
      // console.log(error);
    }
  };
  static dischargedAppointmentByDr = async (req, res) => {
    try {
      // console.log("inside");
      const a = req.query.doctorId;
      const isDischarged = req.query.isDischarged;
      // console.log(a);
      // console.log(isDischarged);
      console.log(isDischarged);
      // // if (a) {
      let userDetails = await appointmentModel
        .find({
          doctorId: a,
          isDischarged,
        })
        .populate("userId");
      // .find({ isDischarged: false })
      // console.log(userDetails);
      // const userDetails = await appointmentModel
      //   .find({ doctorId: { $in: a }, isDischarged: { $in: false } })
      //   // .find({ isDischarged: false })
      //   .populate("userId");
      return res.json({
        data: userDetails,
        message: messages.blank,
        status: http_code.ok,
      });
      // }
    } catch (error) {
      // console.log(error);
    }
  };
  // static updateAppointment = async (req, res) => {
  //   try {
  //     const id = req.query.id;
  //     const isApproved = req.query.isApproved;
  //       const userDetails = await appointmentModel.findByIdAndUpdate(id, {
  //         isApproved: isApproved,
  //       });
  // console.log(userDetails);
  //       return res.json({
  //         data: userDetails,
  //         message: messages.blank,
  //         status: http_code.ok,
  //       });
  //     }
  //   } catch (error) {
  // console.log(error);
  //   }
  // };
}

module.exports = appointmentController;
