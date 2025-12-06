const express = require("express");
const router = express.Router();
const verifytoken = require("../Auth/Verify");
const SignupController = require("../Controller/StoreController");
const upload = require("../Middleware/Upload");




// http://localhost:5004/store/signup
router.post("/signup",SignupController.signupdata);


// http://localhost:5004/store/login
router.post("/login",SignupController.logindata)

router.post(
  "/filedetails",
  verifytoken,
  upload.array("files"),
  SignupController.filedetails
);

/*
// http://localhost:5004/store/updatedata
router.put("/updatedata",verifytoken,upload.array("files"),SignupController.updatedata)*/


// http://localhost:5004/store/getdata
router.get("/getdata",verifytoken,SignupController.getdata);

module.exports = router;















