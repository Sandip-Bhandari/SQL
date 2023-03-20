let sequelizeInstance = require("./../connection");
const sequelize = require("sequelize");

let SuperHero = sequelizeInstance.define(
  "MyHeroes",
  {
    id: {
      type: sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    power: sequelize.DataTypes.BIGINT,
    comics: sequelize.DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = SuperHero;
