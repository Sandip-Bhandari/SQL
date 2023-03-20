let sequelizeInstance = require("./../connection");
let Captain = require("./Captain");
let Ship = require("./Ships");
let sequelize = require("sequelize");

Captain.hasOne(Ship);
Ship.belongsTo(Captain);

async function LoadModel() {
  await sequelizeInstance.sync();
  const awesomeCaptain = await Captain.findOne({
    where: {
      name: "Jack Sparrow",
    },
  });
  // Do stuff with the fetched captain
  console.log("Name:", awesomeCaptain.name);
  console.log("Skill Level:", awesomeCaptain.skillLevel);
  // Now we want information about his ship!
  const hisShip = await awesomeCaptain.getShip();
  // Do stuff with the ship
  console.log("Ship Name:", hisShip.name);
  console.log("Amount of Sails:", hisShip.amountOfSails);
}

async function insertData() {
  Ship.create({
    name: "Black Pearl",
    crewCapacity: 1000,
    amountOfSails: 50,
  }).then((ship) => {
    ship.createCaptain({ name: "Jack Sparrow", skillLevel: 1 });
  });
}

insertData();
