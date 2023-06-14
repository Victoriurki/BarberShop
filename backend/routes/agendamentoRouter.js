const AgendamentoController = require('../controllers/AgendamentoController');

const express = require('express');

const Router = express.Router();
Router.get('/', AgendamentoController.listar);
Router.get('/:id', AgendamentoController.buscarPorId);
Router.post('/', AgendamentoController.salvar);
Router.put('/:id/status', AgendamentoController.atualizar);
Router.put('/:id', AgendamentoController.atualizar);
Router.delete('/:id', AgendamentoController.excluir);

module.exports = Router;

