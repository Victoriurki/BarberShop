const mongoose = require('mongoose');

const url = 'mongodb://0.0.0.0:27017/barbearia';

const db = mongoose.connect(url)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

module.exports = db;