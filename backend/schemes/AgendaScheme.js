const mongoose = require('mongoose');


const AgendaSchema = new mongoose.Schema({


  agendamentos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agendamento' }],
  
});

const Agenda = mongoose.model('Agenda', AgendaSchema);
module.exports = Agenda;