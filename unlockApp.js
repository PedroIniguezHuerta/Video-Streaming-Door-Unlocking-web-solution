const port = 3000;
var express = require('express');
const path = require("path");
const http = require('http');
const app = express();
const cookieParser = require('cookie-parser');
const server = http.Server(app);
const routes = require('./routes');
const streamEnabler = require('./stream');
try {
  const stream = streamEnabler(server);
}
catch
{
  console.log("Camera not available");
}

var gpiop = require('./rpi');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cookieParser());
app.set('view engine', 'ejs');

// Use the 'body-parser' and 'method-override' middleware functions
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
//app.use(methodOverride());
app.use(express.static('./public'));

require('./routes.js')(app);

//server.listen(3000,"0.0.0.0");
server.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;

