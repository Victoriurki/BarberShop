const Agenda = require('../schemes/AgendaSchema');
const Barbearia = require('../schemes/BarbeariaSchema');
const Barbeiro = require('../schemes/BarbeiroSchema');
const Cliente = require('../schemes/ClienteSchema');
const Servico = require('../schemes/ServicoSchema');

class BarbeariaController {

    async listar(req, res){ 
        const resultado = await Barbearia.find({});
        res.json(resultado);
      }


    async salvar(req, res) {
        const conteudo = req.body;
        const idsDoCliente = conteudo.cliente;
        const idsDoBarbeiro = conteudo.barbeiro;
        const idsDoServico = conteudo.servico;
        const idDaAgenda = conteudo.agenda;
        


        //cliente a barbearia
        if (idsDoCliente != null && idsDoCliente != 'undefined' && idsDoCliente != '') {
            idsDoCliente = await Cliente.find({ '_id': {$in: idsDoCliente} });
        }
        //barbeiro a barbearia
        if (idsDoBarbeiro != null && idsDoBarbeiro != 'undefined' && idsDoBarbeiro != '') {
            idsDoBarbeiro = await Barbeiro.find({ '_id': {$in:idsDoBarbeiro} });
        }
        //serviço a barbearia
        if (idsDoServico != null && idsDoServico != 'undefined' && idsDoServico != '') {
            idsDoServico = await Servico.find({ '_id': {$in:idsDoServico} });
        }
        //agenda a barbearia
        if (idDaAgenda != null && idDaAgenda != 'undefined' && idDaAgenda != ''){
            idDaAgenda = await Agenda.findOne({'_id': idDaAgenda});
          }


        
        const resultado = await Barbearia.create(conteudo);
        res.json(resultado);
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const conteudo = req.body;
        const resultado = await Barbearia.findOneAndUpdate({'_id': id}, conteudo, { new: true });
        res.json(resultado);
    }

    async listarBarbeiros(req, res) {
        const conteudo = req.params.listarBarbeiros;
        const resultado = await Barbearia.find(conteudo);
    }

    async listarServicos(req, res) {
        const conteudo = req.params.listarServicos;
        const resultado = await Barbearia.find(conteudo);
    }

    async listarClientes(req, res) {
        const conteudo = req.params.listarClientes;
        const resultado = await Barbearia.find(conteudo);
    }
}
module.exports = new BarbeariaController();