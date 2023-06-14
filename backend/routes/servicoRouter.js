const ServicoController = require('../controllers/ServicoController');

const express = require('express');

const Router = express.Router();

Router.get('/', ServicoController.listar);
Router.get('/:id', ServicoController.buscarPorId);
Router.post('/', ServicoController.salvar);
Router.put('/:id', ServicoController.atualizar);
Router.delete('/:id', ServicoController.excluir);

module.exports = Router;