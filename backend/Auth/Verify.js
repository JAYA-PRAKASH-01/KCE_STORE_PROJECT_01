const jwt = require("jsonwebtoken");

const verifytoken = (req, res, next) => {
  // Expect "Authorization: Bearer <token>"
  const auth = req.headers.authorization || "";
  const token = auth.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    const secret = process.env.JWT_SECRET || "mysecret";
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // attach user payload (id, rollno, name)
    next();
  } catch (err) {
    console.error("verify token error:", err);
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = verifytoken;
