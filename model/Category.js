let sequelizeInstance = require("./../connection");
const sequelize = require("sequelize");

let Categories = sequelizeInstance.define(
  "categories",
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    ranking: sequelize.DataTypes.BIGINT,
    description: sequelize.DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
