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
/*app.post('/log', outp);
app.put('/log', outp);
app.delete('/log', outp);*/

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});




function outp(req, res) {
	res.json({
	 query: req.query,
	 headers:req.headers,
	 body:req.body,
	 METHOD: req.method
	});
}
