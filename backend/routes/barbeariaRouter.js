const BarbeariaController = require('../controllers/BarbeariaController');

const express = require('express');

const Router = express.Router();
Router.get('/', BarbeariaController.listar);
Router.get('/barbeiros', BarbeariaController.listarBarbeiros);
Router.get('/clientes', BarbeariaController.listarClientes);
Router.get('/servicos', BarbeariaController.listarServicos);
Router.post('/', BarbeariaController.salvar);
Router.put('/:id', BarbeariaController.atualizar);

module.exports = Router;