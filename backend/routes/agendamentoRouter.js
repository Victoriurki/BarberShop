const AgendamentoController = require('../controllers/AgendamentoController');

const express = require('express');

const Router = express.Router();
Router.get('/', AgendamentoController.listar);
Router.get('/', AgendamentoController.buscarPorId);
Router.post('/', AgendamentoController.salvar);
Router.put('/', AgendamentoController.atualizar);
Router.put('/', AgendamentoController.excluir);

module.exports = Router;