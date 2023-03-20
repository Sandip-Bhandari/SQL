let sequelizeInstance = require("./connection");
const Sequelize = require("sequelize");
const Users = sequelizeInstance.define(
  "users",
  {
    id: Sequelize.BIGINT,
    email: Sequelize.STRING,
    category: Sequelize.STRING,
    price: Sequelize.BIGINT,
  },
  {
    timestamps: false,
  }
);

module.exports = Users;
