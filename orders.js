let sequelizeInstance = require("./connection");
const Sequelize = require("sequelize");
const Orders = sequelizeInstance.define(
  "orders",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: Sequelize.BIGINT,
    productId: Sequelize.STRING,
    quantity: Sequelize.BIGINT,
    payment: Sequelize.TINYINT(0),
    createdAt: Sequelize.DATE,
  },
  {
    timestamps: false,
  }
);

module.exports = Orders;
