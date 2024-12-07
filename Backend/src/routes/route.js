const express = require("express");
const {
  registerHandler,
  loginHandler,
  getUsersHandler,
  logoutHandler,
  tokenValidation,
  changePassHandler,
} = require("../controllers/userControllers.js");
const verifyToken = require("../middleware/verifyToken.js");
const {
  mailVerificationHandler,
  resendOtpHandler,
} = require("../controllers/verifyEmailControllers.js");

const router = express.Router();
router.get("/user/:username", verifyToken, getUsersHandler);
router.post("/token/validation", verifyToken, tokenValidation);
router.post("/register", registerHandler);
router.post("/login", loginHandler);
router.patch("/mail/verify", mailVerificationHandler);
router.patch("/resend-otp", resendOtpHandler);
router.patch("/change-password", verifyToken, changePassHandler);
router.post("/logout", logoutHandler);

module.exports = router;
