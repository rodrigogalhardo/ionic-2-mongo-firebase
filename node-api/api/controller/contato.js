module.exports = ({
	create: (req,res)=> {
		const Contato = require('../model/contato');
		const contato = new Contato();
		contato.nome = req.body.nome;
		contato.email = req.body.email;
		contato.telefone = req.body.telefone;
		contato.cpf = req.body.cpf;
		contato.save()
		.then(contato => res.status(200).json(contato))
		.catch(err => res.status(400).json(err));

	},
	update: (req,res)=>{
		const Contato = require('../model/contato');
		const query = {_id: req.params.id};
		const model = req.body;
		Contato.update(query, mod)
		.then(contato => res.status(200).json(contato))
		.catch(err => res.status(400).json(err));
	},
	list: (req,res)=>{
		const Contato = require('../model/contato');
		const query = {};
		Contato.find(query)
		.then(contato => res.status(200).json(contato))
		.catch(err => res.status(400).json(err))
	},
	listOne: (req,res)=>{
		const Contato = require('../model/contato');
		const query = {id: req.params.id};
		Contato.findOne(query).then(contato => res.status(200).json(contato)).catch(err => res.status(400).json(err));
	},
	remove: (req,res)=>{
		const Contato = require('../model/contato');
		const query = {_id: req.params.id};
		Contato.remove(query)
		.then(contato => res.status(200).json(contato))
		.catch(err => res.status(400).json(contato));
	}
})
