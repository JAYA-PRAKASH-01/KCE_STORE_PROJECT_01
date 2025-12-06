const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  rollno: String,
  name: String,
  dept: String,
  year: String,
  deliveryTime: String,
  files: [String],
  copies: [String],
  color: [String],
  desc: [String],
});

module.exports = mongoose.model("FileDetails", dataSchema);
 