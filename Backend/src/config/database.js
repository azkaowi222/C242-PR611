const { Sequelize } = require("sequelize");
require("dotenv").config();

const database = process.env.DATABASE_NAME;
const username = process.env.USERNAME_DB;
const password = process.env.PASSWORD_DB;
const sequelize = new Sequelize(database, username, password, {
  host: process.env.HOST,
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
