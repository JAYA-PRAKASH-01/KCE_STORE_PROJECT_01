const Signup = require("../Models/Signup");
const FileUpload = require("../Models/FileUpload");
const Token = require("../Utility/Token");

// Signup
const signupdata = async (req, res) => {
  const { name, rollno, email, password } = req.body;
  try {
    const existing = await Signup.findOne({ rollno });
    if (existing) return res.status(409).json({ msg: "exists" });

    const user = await Signup.create({ name, rollno, email, password });
    res.status(201).json({ msg: "success", user });
  } catch (error) {
    console.error("signup error:", error);
    res.status(500).json({ msg: "Server error", error });
  }
};

// Login
const logindata = async (req, res) => {
  const { rollno, email, password } = req.body;
  try {
    const user = await Signup.findOne({ rollno });
    if (!user) return res.status(404).json({ msg: "notfound" });

    if (user.email === email && user.password === password) {
      const token = Token(user);
      res.json({ msg: "success", token, rollno: user.rollno, name: user.name });
    } else {
      res.status(401).json({ msg: "invalid" });
    }
  } catch (error) {
    console.error("login error:", error);
    res.status(500).json({ msg: "Server error", error });
  }
};

// File upload details
const filedetails = async (req, res) => {
  try {
    // files saved by multer
    const files = (req.files || []).map(f => f.filename);

    // form fields
    const { rollno, name, dept, year, deliveryTime } = req.body;

    // handle array/singleton values for copies, color, desc
    const copies = req.body.copies ? (Array.isArray(req.body.copies) ? req.body.copies : [req.body.copies]) : [];
    const color = req.body.color ? (Array.isArray(req.body.color) ? req.body.color : [req.body.color]) : [];
    const desc = req.body.desc ? (Array.isArray(req.body.desc) ? req.body.desc : [req.body.desc]) : [];

    const record = await FileUpload.create({
      rollno,
      name,
      dept,
      year,
      deliveryTime,
      files,
      copies,
      color,
      desc,
    });

    res.status(201).json({ msg: "success", record });
  } catch (error) {
    console.error("filedetails error:", error);
    res.status(500).json({ msg: "Server error", error });
  }
};

// Get files of the currently logged-in user
const getdata = async (req, res) => {
  try {
    // req.user is attached by verifytoken
    const rollno = req.user?.rollno;
    if (!rollno) return res.status(400).json({ msg: "Invalid user" });

    const records = await FileUpload.find({ rollno });
    res.json({ msg: "success", records });
  } catch (error) {
    console.error("getdata error:", error);
    res.status(500).json({ msg: "Server error", error });
  }
};

// Get all files (admin)
const getAllFiles = async (req, res) => {
  try {
    const records = await FileUpload.find({});
    res.json({ msg: "success", records });
  } catch (error) {
    console.error("getAllFiles error:", error);
    res.status(500).json({ msg: "Server error", error });
  }
};

module.exports = {
  signupdata,
  logindata,
  filedetails,
  getdata,
  getAllFiles,
};
