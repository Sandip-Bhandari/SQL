let connection = require("./../connection");
const sequelize = require("sequelize");
const SuperHero = require("./../model/superHero");

async function createTable() {
  await connection.sync({ force: true });
  console.log("Table created");
  bulkInsertHeroes();
}

// inserting single row in the table
async function insertSuperHeroes() {
  await SuperHero.create({
    name: "Iron man",
    power: 78,
    comics: "Marvel",
  });
}

// inserting multiple rows in the table
async function bulkInsertHeroes() {
  await SuperHero.bulkCreate([
    {
      name: "Batman",
      power: 65,
      comics: "DC",
    },
    {
      name: "Superman",
      power: 90,
      comics: "DC",
    },
    {
      name: "Wanda",
      power: 100,
      comics: "Marvel",
    },
    {
      name: "Commando Dhruv",
      power: 65,
      comics: "Raj Comics",
    },
  ]);
}

// ============  - C - rud =============
createTable();
// insertSuperHeroes(); // to insert single row
// bulkInsertHeroes(); // to insert multiple row

// ============  c --R-- ud =============
// Retrieve all the data
async function getAllSuperHeroes() {
  let allheroes = await SuperHero.findAll();
  console.log(JSON.stringify(allheroes, null, 2));
}

async function getSelectedColumns() {
  let totalStrength = await SuperHero.findAll({
    attributes: [
      [sequelize.fn("SUM", sequelize.col("name")), "total strength"],
    ],
  });
  console.log(JSON.stringify(totalStrength, null, 2));
}

async function excludeColumns() {
  let allHeroes = await SuperHero.findAll({
    attributes: { exclude: ["power"] },
  });
  console.log(JSON.stringify(allHeroes, null, 2));
}

async function getMarvelSuperHeroes() {
  let marvelHeroes = await SuperHero.findAll({
    where: {
      comics: "Marvel",
    },
  });
  console.log(JSON.stringify(marvelHeroes, null, 2));
}

async function getPowerfulSuperheroes() {
  let powerfulHeroes = await SuperHero.findAll({
    where: {
      [sequelize.Op.or]: {
        power: {
          [sequelize.Op.gte]: 90,
        },
        comics: {
          [sequelize.Op.eq]: "Marvel",
        },
      },
    },
  });
  console.log(JSON.stringify(powerfulHeroes, null, 2));
}

// getSelectedColumns();
// excludeColumns();
// getAllSuperHeroes();
// getMarvelSuperHeroes();
// getPowerfulSuperheroes();

// ==============  cr--U--d========
async function updatePower() {
  await SuperHero.update(
    {
      power: 70,
      name: "Super Commando Dhruv",
    },
    {
      where: {
        comics: "Raj Comics",
      },
    }
  );

  console.log("Updated");
}

//updatePower();

// ==============  cru -- D -- ========
async function deleteRows() {
  await SuperHero.destroy({
    where: {
      name: "Iron man",
    },
  });

  console.log("Deleted");
}

// deleteRows();

// ================== Group By =================

async function groupHeroes() {
  let groupedHeroes = await SuperHero.findAll({
    attributes: [
      "comics",
      [sequelize.fn("SUM", sequelize.col("power")), "total strength"],
    ],
    group: "comics",
  });

  console.log(JSON.stringify(groupedHeroes, null, 2));
}

// groupHeroes();

// ====================== Order By ==============

async function sortSuperHeroes() {
  let sorted = await SuperHero.findAll({
    order: [["power", "DESC"]],
  });

  console.log(JSON.stringify(sorted, null, 2));
}

// sortSuperHeroes();
