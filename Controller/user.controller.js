let Users = require("./../model/Users");

async function getAllUsers() {
  let users = await Users.findAll({
    where: {
      email: "kiran@outlook.com",
    },
  });
  console.log(JSON.stringify(users));
}

getAllUsers();
