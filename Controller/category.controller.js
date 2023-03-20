let Categories = require("./../model/Category");
let sequelizeInstance = require("./../connection");
const { Sequelize } = require("sequelize");
// /newUSer
async function createTable() {
  await sequelizeInstance.sync({ force: true });
  console.log("Category table created successfully!");
  insertCategories();
}

async function insertCategories() {
  await Categories.bulkCreate([
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

async function getAllCategories() {
  const categories = await Categories.findAll({
    where: {
      [Sequelize.Op.or]: {
        id: {
          [Sequelize.Op.between]: [1, 2],
        },
        name: {
          [Sequelize.Op.eq]: "Laptop",
        },
      },
    },
  });
  console.log(JSON.stringify(categories, null, 2));
}

async function updateCategories() {
  await Categories.update(
    {
      description: "TV is an idiot box",
      name: "Television",
    },
    {
      where: {
        name: "TV",
      },
    }
  );

  console.log("Updated");
}

async function deleteCategories() {
  await Categories.destroy({
    where: {
      name: "Mobile Phones",
    },
  });

  console.log("Deleted");
}

async function sortCategories() {
  let sorted = await Categories.findAll({
    order: [["id", "DESC"]],
  });

  console.log(JSON.stringify(sorted, null, 2));
}

async function groupCategories() {
  let grouped = await Categories.findAll({
    attributes: [
      "ranking",
      [Sequelize.fn("COUNT", Sequelize.col("ranking")), "rank counts"],
    ],
    group: "ranking",
  });

  console.log(JSON.stringify(grouped, null, 2));
}

createTable();
// updateCategories();
// deleteCategories();
// sortCategories();
// groupCategories();
