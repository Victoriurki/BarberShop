const AgendaController = require('../controllers/AgendaController');

const express = require('express');

const Router = express.Router();
Router.get('/', AgendaController.listar);
Router.post('/', AgendaController.salvar);

module.exports = Router;