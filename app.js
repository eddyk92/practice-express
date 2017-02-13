'use strict'

var express = require('express');
// var path = require('path');
var app = express();

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));


var server = app.listen(5000, function(){
	console.log('server running on port 5000!')
});