require('./database/mongo');
const cors = require('cors');
const express = require('express');
const servidor = express();
servidor.use(express.json());
servidor.use(cors());



//Rotas
const BarbeariaRouter = require('./routes/barbeariaRouter');
servidor.use('/barbearia', BarbeariaRouter);

const BarbeiroRouter = require('./routes/barbeiroRouter');
servidor.use('/barbeiros', BarbeiroRouter);

const ClienteRouter = require('./routes/clienteRouter');
servidor.use('/clientes', ClienteRouter);

const ServicoRouter = require('./routes/servicoRouter');
servidor.use('/servicos', ServicoRouter);

const AgendaRouter = require('./routes/agendaRouter');
servidor.use('/agendas', AgendaRouter);

const AgendamentoRouter = require('./routes/agendamentoRouter');
servidor.use('/agendamentos', AgendamentoRouter);


servidor.get('/', function(req, res){    
    res.send('Servidor da barbearia rodando...');
});

servidor.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});