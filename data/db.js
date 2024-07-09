const { Sequelize } = require("sequelize");
const db = new Sequelize("pacientes", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = db;