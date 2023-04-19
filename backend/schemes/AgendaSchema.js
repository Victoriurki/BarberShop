const mongoose = require('mongoose');


const AgendaSchema = new mongoose.Schema({


  data: Date,
  telefone: String,
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  status: Status,
});

const Agenda = mongoose.model('Agenda', AgendaSchema);


const Status = {
  Livre, 
  Aguardando,
  Inicializado,
  Concluido,
  Cancelado
};

