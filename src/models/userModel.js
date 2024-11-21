const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Users = sequelize.define("users", {
  id: {
    type: DataTypes.STRING(20),
    primaryKey: true,
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
});

module.exports = Users;
