let sequelizeInstance = require("./../connection");
const sequelize = require("sequelize");
const Ship = sequelizeInstance.define(
  "ship",
  {
    name: sequelize.TEXT,
    crewCapacity: sequelize.INTEGER,
    amountOfSails: sequelize.INTEGER,
  },
  { timestamps: false }
);

module.exports = Ship;
