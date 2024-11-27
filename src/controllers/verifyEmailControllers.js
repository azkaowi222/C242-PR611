const Users = require("../models/userModel");
const sendMail = require("../utils/mailVerification");

const mailVerificationHandler = async (req, res) => {
  const { verifCode } = req.body;
  if (!verifCode) {
    return res.status(400).json({
      status: "fail",
      message: "Please fill verification code",
    });
  }
  const user = await Users.findAll({
    where: {
      OTP: verifCode,
    },
  });
  const isVerified = Number(user[0]?.OTP) === Number(verifCode);
  if (!isVerified) {
    return res.status(403).json({
      status: "fail",
      message: "Invalid or expired code",
    });
  }
  await Users.update(
    {
      OTP: 1,
      verify: true,
    },
    {
      where: {
        OTP: verifCode,
      },
    }
  );
  return res.status(200).json({
    status: "success",
    message: "Email verification successfully",
  });
};

const resendOtpHandler = async (req, res) => {
  const { userId } = req.cookies;
  if (!userId) {
    return res.status(403).json({
      status: "fail",
      message:
        "Theres a problem with the server. try register with different email",
    });
  }
  const user = await Users.findAll({
    where: {
      id: userId,
    },
  });
  if (user[0].verify) {
    return res.status(200).json({
      message: "Email has been verified",
    });
  }
  const otp = await sendMail(user[0].email, user[0].username);
  await Users.update(
    {
      OTP: otp,
      verify: false,
    },
    {
      where: {
        id: userId,
      },
    }
  );
  return res.json({
    status: "success",
    message: "Otp successfully resent",
  });
};

module.exports = { mailVerificationHandler, resendOtpHandler };
