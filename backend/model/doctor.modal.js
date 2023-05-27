const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  graduation: { type: String, required: true },
  mobile: { type: Number, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  isVerified: { type: String, default: "pending" },
});

module.exports = mongoose.model("Doctor", doctorSchema);
