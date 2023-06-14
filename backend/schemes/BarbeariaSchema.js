const mongoose = require('mongoose');

const BarbeariaSchema = new mongoose.Schema({
  
  nome: String,
  endereco: String,
  telefone: String,
  barbeiros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Barbeiro' }],
  servicos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Servico' }],
  clientes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }],
  agenda: { type: mongoose.Schema.Types.ObjectId, ref: 'Agenda' },
});

const Barbearia = mongoose.model('Barbearia', BarbeariaSchema);
module.exports = Barbearia;