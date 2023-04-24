const Cliente = require('../schemes/ClienteSchema');


class ClienteController {
    async listar(req, res){ 
        const resultado = await Cliente.find({});
        res.json(resultado);
      }
    
      async buscarPorId(req, res){
        const id = req.params.id;
        const conteudo = await Cliente.findOne({'_id': id});
        res.json(conteudo);
      }
    
      async salvar(req, res) {            
        const conteudo = req.body;
        const resultado = await Cliente.create(conteudo);
        res.json(resultado);
      }
    
      async atualizar(req, res){
        const id = req.params.id;
        const conteudo = req.body;        
        const resultado = await Cliente.findOneAndUpdate({'_id': id}, conteudo, {new: true});
        res.json(resultado);
      }
    
      async excluir(req, res){
        const id = req.params.id;
        await Cliente.findOneAndDelete({'_id': id});
        res.send("Conteúdo excluído!");
      }
}

module.exports = new ClienteController();