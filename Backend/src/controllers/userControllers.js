const Users = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const sendMail = require("../utils/mailVerification.js");

const tokenValidation = (req, res) => {
  return res.json({
    status: "success",
    data: req.user,
  });
};

const getUsersHandler = async (req, res) => {
  const { username } = req.params;
  const user = await Users.findOne({
    attributes: ["id", "email", "username"],
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json({
      message: "User not found!",
    });
  }
  return res.json({
    status: "success",
    user,
  });
};

const registerHandler = async (req, res) => {
  const { email, username, password, confirmPassword } = req.body;
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

  const userIsExist = await Users.findOne({
    where: {
      email,
    },
  });
  if (userIsExist) {
    return res.status(409).json({
      status: "fail",
      message: "Email already exist",
    });
  }

  const id = crypto.randomUUID();
  const otp = await sendMail(email, username);
  const salt = await bcrypt.genSalt();
  const hashedPass = await bcrypt.hash(password, salt);
  await Users.create({
    id,
    email,
    username,
    password: hashedPass,
    OTP: otp,
    verify: false,
  });
  res.cookie("userId", id, {
    httpOnly: true,
    maxAge: 3600000,
  });
  return res.status(201).json({
    status: "pending",
    message: `Code has been sent to: ${email}, check your email address for verification`,
  });
};

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please fill email & password!",
      });
    }
    const user = await Users.findOne({
      where: {
        email,
      },
      rejectOnEmpty: true,
    });
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error();
    }
    const isVerified = user.verify;
    if (!isVerified) {
      return res.status(403).json({
        status: "fail",
        message:
          "Your account has not been activated. Please verify your email to continue.",
      });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email, username: user.username },
      process.env.SECRET_KEY,
      {
        algorithm: "HS256",
        expiresIn: "5h",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000,
    });
    return res.status(200).json({
      status: "success",
      message: "Login successfully",
      token,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "Incorrect username or password",
    });
  }
};

const changePassHandler = async (req, res) => {
  const { password, newPassword, confirmNewPassword } = req.body;
  const { id } = req.user;
  if (!password || !newPassword || !confirmNewPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Please fill all credentials",
    });
  }
  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Password and password confirmation do not match",
    });
  }

  try {
    const user = await Users.findOne({
      where: {
        id,
      },
      rejectOnEmpty: true,
    });
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(newPassword, salt);
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error();
    }
    await Users.update(
      {
        password: hashedPass,
      },
      {
        where: {
          id,
        },
      }
    );
    return res.json({
      status: "success",
      message: "Password updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid old password",
    });
  }
};

const logoutHandler = (req, res) => {
  res.clearCookie("token");
  return res.json({
    status: "success",
    message: "Logout successfully",
  });
};

module.exports = {
  registerHandler,
  loginHandler,
  getUsersHandler,
  logoutHandler,
  tokenValidation,
  changePassHandler,
};
