const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const autHeader = req.headers["authorization"];
  const token = autHeader && autHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        status: "fail",
        message: "Invalid or expired token",
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
