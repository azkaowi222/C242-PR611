const Users = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Op } = require("sequelize");
const sendMail = require("../utils/mailVerification.js");

const verifyHandler = (req, res) => {
  res.status(200).json({ valid: true, user: req.user });
};

const registerHandler = async (req, res) => {
  const { email, username, password, confirmPassword } = req.body;
  console.log(email);
  if ((!email, !username || !password || !confirmPassword)) {
    return res.status(400).json({
      status: "fail",
      message: "Please fill all credentials",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Password and password confirmation do not match",
    });
  }

  const userIsExist = await Users.findAll({
    where: {
      username,
    },
  });
  if (userIsExist.length >= 1) {
    return res.status(409).json({
      status: "fail",
      message: "Username already exist",
    });
  }

  const verifCode = crypto.randomInt(100000, 1000000);
  const id = crypto.randomUUID();
  const user = await Users.create({
    id,
    email,
    username,
    password,
    verifCode,
    verify: false,
  });
  res.cookie("userId", user.id, {
    httpOnly: true,
    maxAge: 900000,
  });
  await sendMail(email, username, verifCode);
  return res.status(201).json({
    status: "pending",
    message: `Code has been sent to: ${email}, please check your email address for verification`,
  });
};

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please fill username & password!",
    });
  }

  const user = await Users.findAll({
    where: {
      [Op.and]: [{ username, password }],
    },
  });

  if (user.length < 1) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect username or password",
    });
  }
  const isVerified = user[0].verify;
  if (!isVerified) {
    return res.status(403).json({
      status: "fail",
      message:
        "Your account has not been activated. Please verify your email to continue.",
    });
  }
  const token = jwt.sign(
    { id: user[0].id, role: "user" },
    process.env.SECRET_KEY,
    {
      algorithm: "HS256",
      expiresIn: "1h",
    }
  );
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 900000,
  });
  return res.status(200).json({
    status: "success",
    message: "Login successfully",
  });
};

const mailVerificationHandler = async (req, res) => {
  const id = req.cookies.userId;
  const { verifCode } = req.body;
  if (!verifCode) {
    return res.status(400).json({
      status: "fail",
      message: "Please fill verification code",
    });
  }
  const user = await Users.findAll({
    where: {
      id,
    },
  });
  const isVerified = Number(user[0].verifCode) === Number(verifCode);
  if (!isVerified || !id) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid or expired code",
    });
  }
  await Users.update(
    {
      verifCode: 1,
      verify: true,
    },
    {
      where: {
        id,
      },
    }
  );
  return res.status(200).json({
    status: "success",
    message: "Email verification successfully",
  });
};

module.exports = {
  verifyHandler,
  registerHandler,
  loginHandler,
  mailVerificationHandler,
};
