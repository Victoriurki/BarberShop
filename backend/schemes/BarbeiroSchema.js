const mongoose = require('mongoose');

const BarbeiroSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  especialidade: String
});

const Barbeiro = mongoose.model('Barbeiro', BarbeiroSchema);