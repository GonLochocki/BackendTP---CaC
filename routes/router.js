const express = require("express");
const {mostrarPacientes, mostrarUnPaciente, crearPaciente, actualizarPaciente, borrarPaciente} = require("../controllers/controllers.js")
const router = express.Router();

router.get("/", mostrarPacientes);
router.get("/:id", mostrarUnPaciente);
router.post("/", crearPaciente);
router.put("/:id", actualizarPaciente);
router.delete("/:id", borrarPaciente);

module.exports = router;
