var express = require('express');
// eslint-disable-next-line
var path = require('path');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);

// eslint-disable-next-line
console.log('server started on '+ port);