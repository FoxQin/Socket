var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send(result);
});

var server = app.listen(3000, function () {
	console.log('Server start successfully.');
});
