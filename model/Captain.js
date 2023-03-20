let sequelizeInstance = require("./../connection");
let sequelize = require("sequelize");

const Captain = sequelizeInstance.define(
  "captain",
  {
    name: sequelize.TEXT,
    skillLevel: {
      type: sequelize.INTEGER,
      validate: { min: 1, max: 10 },
    },
  },
  { timestamps: false }
);

module.exports = Captain;
