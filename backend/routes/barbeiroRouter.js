const BarbeiroController = require('../controllers/BarbeiroController');

const express = require('express');

const Router = express.Router();

Router.get('/', BarbeiroController.listar);
Router.get('/:id', BarbeiroController.buscarPorId);
Router.post('/', BarbeiroController.salvar);
Router.put('/:id', BarbeiroController.atualizar);
Router.delete('/:id', BarbeiroController.excluir);

module.exports = Router;