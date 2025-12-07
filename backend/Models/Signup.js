const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollno: { type: String, required: true, unique: true },
  email: { type: String },
  password: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Signupdata", dataSchema);
