// Invoke 'strict' JavaScript mode
'use strict';
module.exports = function(app) {
	var index = require('./controllers/index.server.controller');
	var unlocker = require('./controllers/unlocker.server.controller');

	// Mount the 'index' controller's 'render' method
	app.get('/', index.render);

	// Mount the 'unlocker' controller's 'render' method
	app.post('/unlocker', unlocker.render);
};
