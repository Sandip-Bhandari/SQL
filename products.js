let sequelizeInstance = require("./connection");
const Sequelize = require("sequelize");
const Products = sequelizeInstance.define(
  "products",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.BIGINT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Products;
