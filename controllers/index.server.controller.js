// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.render = function(req, res) {
    res.render('mainMenu', {"title":"MainMenu"});
};
