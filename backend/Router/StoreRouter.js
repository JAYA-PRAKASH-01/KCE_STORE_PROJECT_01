const express = require("express");
const router = express.Router();
const verifytoken = require("../Auth/Verify");
const adminVerify = require("../Auth/AdminVerify");
const SignupController = require("../Controller/StoreController");
const upload = require("../Middleware/Upload");

// Signup
// POST /store/signup
router.post("/signup", SignupController.signupdata);

// Login
// POST /store/login
router.post("/login", SignupController.logindata);

// File upload details (user must be authenticated)
router.post(
  "/filedetails",
  verifytoken,
  upload.array("files"),
  SignupController.filedetails
);

// Get current user's files
// GET /store/getdata
router.get("/getdata", verifytoken, SignupController.getdata);

// Admin: get all files
// GET /store/admin/allfiles
router.get("/admin/allfiles", verifytoken, adminVerify, SignupController.getAllFiles);

module.exports = router;
