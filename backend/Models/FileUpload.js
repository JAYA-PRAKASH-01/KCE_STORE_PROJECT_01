const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  rollno: { type: String, required: true },
  name: String,
  dept: String,
  year: String,
  deliveryTime: String,
  files: [String],
  copies: [String],
  color: [String],
  desc: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FileDetails", dataSchema);
