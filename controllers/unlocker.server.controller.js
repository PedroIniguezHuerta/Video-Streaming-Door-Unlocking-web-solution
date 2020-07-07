// Invoke 'strict' JavaScript mode
'use strict';
const RELOCK_TIME = 5000;
var unlockDoor = require('../rpi').unlockDoor;
var lockDoor = require('../rpi').lockDoor;

// Create a new 'render' controller method
exports.render = function(req, res) {
    unlockDoor();

    setTimeout(function(){lockDoor();},RELOCK_TIME);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"state":"unlocked","relock time":RELOCK_TIME}));
};

