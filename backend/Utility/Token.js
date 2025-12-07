const jwt = require("jsonwebtoken");

module.exports = (user) => {
  const payload = {
    id: user._id,
    rollno: user.rollno,
    name: user.name
  };
  const secret = process.env.JWT_SECRET || "mysecret";
  // token valid for 7 days
  return jwt.sign(payload, secret, { expiresIn: "7d" });
};
