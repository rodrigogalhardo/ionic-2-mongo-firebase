'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	morgan = require('morgan');

require('./config/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

const port = process.env.PORT || 3000;

require('./api/routes/contato')(app);
//require('./routes')(app);

app.listen(port, function () {
	console.log('Servidor rodando em http://localhost:' + port);
});

module.exports = app;
