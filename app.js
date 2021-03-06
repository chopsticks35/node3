// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
	res.sendFile('index.html', {root : './public/html'});
});

app.get('/success', function(req, res) {
		res.send('<h1>Email Success!</h1>');
	})

app.post('/formsubmit', function(req, res) {
	res.redirect('/success');
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
	console.log('Server running on port ' + port);
})