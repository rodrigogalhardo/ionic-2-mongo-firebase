module.exports = app => {
	const Controller = require('../controller/contato');
	const url = '/api/v1';

	app.get(url + "/contato", Controller.list);
	app.post(url + "/contato", Controller.create);
	app.get(`${url}/contato/:id`, Controller.listOne);
	app.put(`${url}/contato/:id`, Controller.update);
	app.delete(`${url}/contato/:id`, Controller.remove);

}
