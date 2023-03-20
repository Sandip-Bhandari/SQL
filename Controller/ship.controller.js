let Ships = require("./../model/Ships");
let sequelizeInstance = require("./../connection");
const { sequelize } = require("sequelize");

async function insertShips() {
  await Ships.bulkCreate([
    {
      name: "Mobile Phones",
      description: "Mobile Descriptions",
      ranking: 1,
    },
    {
      name: "TV",
      description: "TV Descriptions",
      ranking: 2,
    },
    {
      name: "Laptop",
      description: "Laptop Descriptions",
      ranking: 2,
    },
    {
      name: "Printer",
      description: "Printer Descriptions",
      ranking: 6,
    },
    {
      name: "Speaker",
      description: "Speaker Descriptions",
      ranking: 5,
    },
    {
      name: "PC",
      description: "Personal Computes",
      ranking: 6,
    },
  ]);

  getAllCategories();
  //  updateCategories();
}

insertShips();
