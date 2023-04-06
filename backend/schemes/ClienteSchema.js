const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: String,
    telefone: String
});

const Cliente = mongoose.model('Cliente', ClienteSchema);