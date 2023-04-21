const mongoose = require('mongoose');


const AgendamentoSchema = new mongoose.Schema({
  data: {type: Date, required : [true, "A data é obrigatória!"]},
  telefoneCliente: String,
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  barbeiro: { type: mongoose.Schema.Types.ObjectId, ref: 'Barbeiro' },
  servico: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Servico' }],
  status: {type: Status, default: Status.Livre},
});

const Agendamento = mongoose.model('Agendamento', AgendamentoSchema);
module.exports = Agendamento;

const Status = {
  Livre,
  Aguardando,
  Inicializado,
  Concluido,
  Cancelado
};

