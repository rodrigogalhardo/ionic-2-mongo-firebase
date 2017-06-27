const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contato = new Schema({
	nome: {type: String},
	email: {type: String},
	telefone: {type: String},
	cpf: {type: String}
})

const object = mongoose.model('Contato', contato)

module.exports = object