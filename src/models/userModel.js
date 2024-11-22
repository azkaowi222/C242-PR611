const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Users = sequelize.define("users", {
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
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  verifCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  verify: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Users;
