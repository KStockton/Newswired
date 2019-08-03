var express = require('express');
var serveStatic = require('serve-static');
const path = require('path');

app = express();

app.use('/', serveStatic(path.join(__dirname, "/public/index.html")));
var port = process.env.PORT || 8080;

app.listen(port);

console.log('Listening on port: '+ port);