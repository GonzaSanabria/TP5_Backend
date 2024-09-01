//--- requires ------------------------------------------
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const medicoBD = require("./../modelos/medicosModel.js");

// -------------------------------------------------------- 
// --rutas de escucha (endpoint) dispoibles para MEDICO --- 
// --------------------------------------------------------

app.get("/", listarTodo);
app.get("/:especialidad", getByEspecialidad);
app.post('/create', crear);
app.get('/:matricula', obtenerMedico);
app.delete("/:matricula", eliminarMedico);
app.put("/:matricula", modificarMedico);
