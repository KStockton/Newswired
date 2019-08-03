var express = require('express');
const path = require('path');

const app = express();

app.use('/', path.join(__dirname, "/public/index.html"));
var port = process.env.PORT || 8080;

app.listen(port);

console.log('Listening on port: '+ port);