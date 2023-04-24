const Agenda = require('../schemes/AgendaScheme');
const Agendamento = require('../schemes/AgendamentoSchema');
const Barbearia = require('../schemes/BarbeariaSchema');

class AgendaController {
    async salvar(req, res) {
        const conteudo = req.body;
        const idDaAgenda = conteudo.agenda;
        const idsDoAgendamento = conteudo.agendamento;

        //agendamento a agenda
        if (idDaAgenda != null && idDaAgenda != 'undefined' && idsDoAgendamento != '') {
            idsDoAgendamento = await Agendamento.find({ '_id': {$in: idsDoAgendamento} });
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