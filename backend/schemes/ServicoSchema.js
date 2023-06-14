const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema({
    nome: String,
    preco: Number
});

const Servico = mongoose.model('Servico', ServicoSchema);
module.exports = Servico;