const ConteudoSchema = require('../schemes/ConteudoSchema');
const Servico = require('../schemes/ServicoSchema');

class ServicoController {
    async listar(req, res){ 
        const resultado = await Servico.find({});
        res.json(resultado);
      }
    
      async buscarPorId(req, res){
        const id = req.params.id;
        const conteudo = await Servico.findOne({'_id': id});
        res.json(conteudo);
      }
    
      async salvar(req, res) {            
        const conteudo = req.body;
        const resultado = await Servico.create(conteudo);
        res.json(resultado);
      }
    
      async atualizar(req, res){
        const id = req.params.id;
        const conteudo = req.body;        
        const resultado = await Servico.findOneAndUpdate({'_id': id}, conteudo, {new: true});
        res.json(resultado);
      }
    
      async excluir(req, res){
        const id = req.params.id;
        await Servico.findOneAndDelete({'_id': id});
        res.send("Conteúdo excluído!");
      }
}

module.exports = new ServicoController();