const Users = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Op } = require("sequelize");

const verifyHandler = (req, res) => {
  res.status(200).json({ valid: true, user: req.user });
};

const registerHandler = async (req, res) => {
  const { username, password, confirmPassword } = req.body;
  if (!username || !password || !confirmPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Please fill username & password!",
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
  const id = crypto.randomUUID();
  await Users.create({
    id,
    username,
    password,
  });

  return res.status(201).json({
    status: "success",
    message: "User registered successfully",
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
      message: "Username or password incorrect",
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

module.exports = { verifyHandler, registerHandler, loginHandler };
