let Ship = require("./Ships");
let Captain = require("./Captain");
let sequelizeInstance = require("./../connection");
const sequelize = require("sequelize");

Captain.hasOne(Ship);
Ship.belongsTo(Captain);

async function createTables() {
  await sequelizeInstance.sync();
  console.log("Table created");
  insertData();
}

async function insertData() {
  let ship = await Ship.create({
    name: "Black Pearl",
    crewCapacity: 1000,
    amountOfSails: 50,
  });

  console.log(ship);

  ship.createCaptain({ name: "Jack Sparrow", skillLevel: 1 });
}

createTables();
