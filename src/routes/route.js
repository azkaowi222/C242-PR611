const express = require("express");
const {
  verifyHandler,
  registerHandler,
  loginHandler,
  mailVerificationHandler,
} = require("../controllers/handler");
const verifyToken = require("../middleware/verifyToken.js");
const router = express.Router();

router.post("/verify", verifyToken, verifyHandler);
router.post("/register", registerHandler);
router.post("/login", loginHandler);
router.post("/mail/verify", mailVerificationHandler);

module.exports = router;
