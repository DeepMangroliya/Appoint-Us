const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    // doctorId: { type: String, required: false },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    date: { type: Date, defalut: Date.now() },
    isApproved: { type: String, default: "pending" },
    isDischarged: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
