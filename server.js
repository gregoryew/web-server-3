var express = require('express');
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About US!');
});

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.listen(3000, function () {
	console.log('Express server started!');
});