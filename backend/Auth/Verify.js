const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const verifytoken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

   
    if (!authHeader) {
      return res.status(401).json({ msg: "Access denied. No token provided." });
    }

   
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "Access denied. Invalid token format." });
    }

  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

module.exports = verifytoken;
