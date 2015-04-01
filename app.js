var express = require('express');
var ejs = require('ejs');
var Dvd = require('./models/Dvd');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/dvds', function(req, res){
	Dvd.findAll({
		where: {
			title: {
				like: '%' + req.query.title + '%'
			},

			award: req.query.award
		}
	}).then(function(results){
		res.render('dvds', {
			dvds: results,
			input: req.query.title
		});
	})
});

app.listen(3000, function(){
	console.log('Listening to 3000');
});