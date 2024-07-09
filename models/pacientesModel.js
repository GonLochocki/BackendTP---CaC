const db = require("../data/db.js");
const { Datatypes, DataTypes } = require("sequelize");

const PacientesModel = db.define("usuarios", {
  nombre: { type: DataTypes.STRING },
  apellido: { type: DataTypes.STRING },
  dni: { type: DataTypes.STRING },
});

module.exports = PacientesModel;
