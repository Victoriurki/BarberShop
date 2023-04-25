const Agenda = require('../schemes/AgendaSchema');
const Agendamento = require('../schemes/AgendamentoSchema');
const Barbeiro = require('../schemes/BarbeiroSchema');
const Cliente = require('../schemes/ClienteSchema');
const Servico = require('../schemes/ServicoSchema');

class AgendamentoController {

    async listar(req, res) {
        const resultado = await Agendamento.find({});
        res.json(resultado);
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const conteudo = await Agendamento.findOne({ '_id': id });
        res.json(conteudo);
    }

    async salvar(req, res) {
        const conteudo = req.body;
        let idDoCliente = conteudo.cliente;
        let idDoBarbeiro = conteudo.barbeiro;
        let idsDoServico = conteudo.servico;
        const idDoAgendamento = conteudo._id;


        //cliente ao agendamento
        if (idDoCliente != null && idDoCliente != 'undefined' && idDoCliente != '') {
            idDoCliente = await Cliente.findOne({ '_id': idDoCliente });
        }
        //barbeiro ao agendamento
        if (idDoBarbeiro != null && idDoBarbeiro != 'undefined' && idDoBarbeiro != '') {
            idDoBarbeiro = await Barbeiro.findOne({ '_id': idDoBarbeiro });
        }
        //serviço ao agendamento
        if (idsDoServico != null && idsDoServico != 'undefined' && idsDoServico != '') {
            idsDoServico = await Servico.find({ '_id': { $in: idsDoServico } });
        }
        //cria um agendamento
        const resultado = await Agendamento.create(conteudo);
        //agendamento a agenda
        if (idDoAgendamento != null && idDoAgendamento != 'undefined' && idDoAgendamento != '') {
            const agenda = await Agenda.findOne({ '_id': idDoAgendamento });
            agenda.agendamentos.push(resultado);
            await Agenda.findOneAndUpdate({ '_id': idDoAgendamento }, agenda);
        }

        res.json(resultado);
    }

    async atualizar(req, res) {
        const id = req.body._id;
        const conteudo = req.body;
        const resultado = await Agendamento.findOneAndUpdate({ '_id': id }, conteudo, { new: true });
        res.json(resultado);
    }

    async excluir(req, res) {
        const id = req.params.id;
        await Agendamento.findOneAndDelete({ '_id': id });
        res.send("Conteúdo excluído!");
    }

}
module.exports = new AgendamentoController();