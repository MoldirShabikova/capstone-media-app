
require("dotenv").config();


const { DATABASE_CONFIG } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE_CONFIG, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getUsers: (req, res) => {
    sequelize.query(`select * from users`).then((dbRes) => {
       res.status(200).send(dbRes[0]);
    })
   
}
  }
  
