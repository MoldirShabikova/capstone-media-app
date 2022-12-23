require("dotenv").config();
const bcrypt = require("bcryptjs");

const { DATABASE_CONFIG } = process.env;
const Sequelize = require("sequelize");


console.log(bcrypt)
const sequelize = new Sequelize(DATABASE_CONFIG, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
