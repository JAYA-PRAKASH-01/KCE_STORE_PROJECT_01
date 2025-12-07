module.exports = (req, res, next) => {
  try {
    // Verify middleware should have already attached req.user
    if (!req.user) {
      return res.status(401).json({ msg: "No user data. Token invalid." });
    }

    // Check if the roll number matches admin
    if (req.user.rollno !== "A100") {
      return res.status(403).json({ msg: "Not authorized" });
    }

    next();
  } catch (error) {
    console.error("admin verify error:", error);
    return res.status(500).json({ msg: "Server error in admin verify" });
  }
};
