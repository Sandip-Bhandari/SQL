let sequelizeInstance = require("./connection");
const Sequelize = require("sequelize");
const Category = sequelizeInstance.define(
  "category",
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
    description: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

async function createModel() {
  // await sequelizeInstance.sync();
  // console.log('Category table created successfully!');
  // Category.bulkCreate([
  //  {name:"Mobile Phones", description:"Mobile Descriptions"},
  //  {name:"TV", description:"TV Descriptions"},
  //  {name:"Laptop", description:"Laptop Descriptions"}
  // ])

  const categories = await Category.findAll({
    where: {
      [Sequelize.Op.or]: [{ name: "Laptop" }, { name: "Fridge" }],
    },
  });
  console.log("All categories:", JSON.stringify(categories, null, 2));
}

createModel();
