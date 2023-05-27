const express = require("express");
const app = express();
const verifyToken = require("../middleware/verify.Token");
const adminController = require("../controller/admin.controller");
const patientController = require("../controller/patient.controller");
const doctorController = require("../controller/doctor.controller");
const appointmentController = require("../controller/appointment.controller");
const extchek = require("../middleware/index.middleware");
const { messages, http_code } = require("../constant/index.constant");
const { upload } = require("../controller/admin.controller");
const billController = require("../controller/bill.controller");
const multer = require("multer");
const path = require("path");

module.exports = (app) => {
  //admin
  app.post(
    "/admin/register",
    extchek.array("profile"),
    // imageUpload.single("image"),
    adminController.register
  );
  app.post("/admin/login", adminController.login);
  // app.post("/admin/upload", upload, adminController.login);
  app.patch(
    "/admin/changeVerification/:id",
    adminController.changeVerification
  );
  app.patch(
    "/admin/changeAppointmentVerification/:id",
    adminController.changeAppointmentVerification
  );
  app.patch("/admin/discharge/:id", adminController.dischargePatient);
  app.get("/admin/discharge/", adminController.dischargePatients);
  app.post("/admin/me", adminController.getAdmin);
  app.post("/patient/me", patientController.getPatient);
  app.post("/doctor/me", doctorController.getDoctor);

  //doctors
  app.post(
    "/doctor/register",
    extchek.array("profile"),
    doctorController.register
  );
  app.post("/doctor/login", doctorController.login);
  app.get("/doctor/doctors", doctorController.doctors);
  app.delete("/doctor/:id", doctorController.deleteDoctor);
  app.patch("/doctor/:id", doctorController.updateDoctor);

  app.delete("/patient/:id", patientController.deletePatient);
  app.patch("/patient/:id", patientController.updatePatient);

  //patients
  app.post(
    "/patient/register",
    // extchek.array("profile"),
    patientController.register
  );
  app.post("/patient/login", patientController.login);
  app.get("/patient/patients", patientController.patients);
  app.get("/hello", doctorController.hello);

  //appointments
  app.post("/appointment", appointmentController.appointment);
  // app.get("/update/appointment", appointmentController.updateAppointment);
  app.get("/appointment", appointmentController.appointments);
  app.get("/appointmentWithUser", appointmentController.appointmentWithUser);
  app.get(
    "/dischargedAppointmentByDr",
    appointmentController.dischargedAppointmentByDr
  );

  app.post("/generatebill", billController.generateBill);
  app.get("/appointmentsByuser", appointmentController.appointmentsByuser);
  app.post("/order", billController.order);
  app.post("/verify", billController.verify);
  app.get("/generatebill", billController.getEBill);
  app.get("/getEBillByAppointmentId", billController.getEBillByAppointmentId);
  app.get("/getEBillByPatient", billController.getEBillByPatient);
  // app.get("/myprofile", verifyToken, adminController.myprofile);

  // app.get("/users", usercontroller.users);

  // app.post(
  //   "/addpost",
  //   verifyToken,
  //   extchek.array("post"),
  //   usercontroller.addpost
  // );
  // app.get("/allpost", verifyToken, usercontroller.explore);
  // app.get("/mypost", verifyToken, usercontroller.mypost);

  // app.post("/addfollowing", verifyToken, usercontroller.addfollow);
  // app.get("/myfollowing", verifyToken, usercontroller.myfollowing);
  // app.post("/unfollow", verifyToken, usercontroller.unfollow);
  // app.get("/myfollower", verifyToken, usercontroller.myfollower);

  // app.get("/myfeed", verifyToken, usercontroller.myfeed);

  // app.post("/addblock", verifyToken, usercontroller.addblock);
  // app.get("/findblokedemail", verifyToken, usercontroller.findblockedperson);

  app.use((req, res) => {
    return res
      .status(404)
      .json({ message: messages.badrequest, status: http_code.badrequest });
  });
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `views/assets/image/`);
  },
  // filename: (req, file, callback) => {
  //   const ext = path.extname(file.originalname);
  //   const filenames = Date.now() + ext;
  //   file.myfilepath = `${path1.Basepath}/assets/image/` + filenames;
  //   callback(null, filenames);
  // },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});

const imageUpload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});
