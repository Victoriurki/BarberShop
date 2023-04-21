const AgendaSchema = require('../schemes/AgendaSchema');
const Agenda = require('../schemes/AgendaScheme');
const Agendamento = require('../schemes/AgendamentoSchema');
const Barbearia = require('../schemes/BarbeariaSchema');

class AgendaController {
    async salvar(req, res) {
        const conteudo = req.body;
        const idDaAgenda = conteudo.agenda;
        const idDoAgendamento = conteudo.agendamento;

        //agendamento a agenda
        if (idDaAgenda != null && idDaAgenda != 'undefined' && idDoAgendamento != '') {
            idDoAgendamento = await Agendamento.findOne({ '_id': idDoAgendamento });
        }
        //cria uma agenda
        const resultado = await Agenda.create(resultado);
        
        //agenda a barbearia
        if (idDaAgenda != null && idDaAgenda != 'undefined' && idDaAgenda != '') {
            const barbearia = await Barbearia.findOne({ '_id': idDaAgenda });
            barbearia.agenda.push(resultado);
            await Barbearia.findOneAndUpdate({ '_id': idDaAgenda }, barbearia);
        }
    }

    async listar(req, res) {
        const resultado = await Agenda.find({});
        res.json(resultado);
    }




}
module.exports = new AgendaController();