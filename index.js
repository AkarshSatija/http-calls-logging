var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('Logging is LIVE!');
});
app.all('/log', outp);

app.listen(80, function() {
	console.log('Example app listening on port 3000!');
});

app.use(function(err, req, res, next) {
	// If the error object doesn't exists
	if (!err) return next();

	// Log it
	console.error(err.stack);

	// Error page
	res.status(500).render('500', {
		error: err.stack
	});
});

// Assume 404 since no middleware responded
app.use(function(req, res) {
	res.status(404).json({
		url: req.originalUrl,
		error: 'Not Found'
	});
});

function outp(req, res) {
	res.json({
		query: req.query,
		headers: req.headers,
		body: req.body,
		METHOD: req.method
	});
}
