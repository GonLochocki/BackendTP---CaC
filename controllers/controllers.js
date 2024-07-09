
const pacientesModel = require("../models/pacientesModel.js");

const mostrarPacientes = async (req,res) => {
    try {
        const pacientes = await pacientesModel.findAll();
        res.json(pacientes);
    } catch (error) {
        console.log(error);
    }
}

const mostrarUnPaciente = async (req,res) => {
    try {
        const paciente = await pacientesModel.findByPk(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
    }
}

const crearPaciente = async (req,res) => {
    try {
        const nuevoPaciente = await pacientesModel.create(req.body);
        res.json(nuevoPaciente);
    } catch (error) {
        console.log(error);
    }
}

const actualizarPaciente = async (req,res) => {
    try {
        await pacientesModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json("Paciente actualizado");
    } catch (error) {
        console.log(error);
    }
}

const borrarPaciente = async (req,res) => {
    try {
        await pacientesModel.destroy({
            where: {id: req.params.id}
        })
        res.json("Usuario eliminado correctamente");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {mostrarPacientes, mostrarUnPaciente, crearPaciente, actualizarPaciente, borrarPaciente}