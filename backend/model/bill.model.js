const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
  daySpent: { type: Number, required: true },
  roomCharge: { type: Number, required: true },
  medicineCost: { type: Number, required: true },
  doctorFee: { type: Number, required: true },
  otherCost: { type: Number, required: true },
  total: { type: Number, required: true },
  isPaymentDone: { type: Boolean, default: false },
});

module.exports = mongoose.model("Bill", billSchema);
