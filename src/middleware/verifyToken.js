const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(400)
      .json({ message: "Access denied. No token provided." });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid or expired token",
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
