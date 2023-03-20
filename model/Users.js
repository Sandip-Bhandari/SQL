const sequelize = require("sequelize");
const sequelizeInstance = require("./../connection");

let Users = sequelizeInstance.define(
  "users",
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: sequelize.DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Users;
