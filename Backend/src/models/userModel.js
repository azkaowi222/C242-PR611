const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.STRING(),
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    OTP: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Users;
