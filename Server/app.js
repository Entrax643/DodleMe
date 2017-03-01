var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var gestionEvents = require('./gestionEvenements.js');

app.use(bodyParser.json()); //parser du JSON
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function(req, res) {
    res.send('Hello World!');
});
app.get('/events', function(req, res) {
    res.json(gestionEvents.getListeEvenements());
});
app.get('/event/:id', function(req, res) {
    res.json(gestionEvents.getEvenementById(req.params.id));
});

app.post('/creerEvent/', function(req, res) {
    var event = gestionEvents.creer(req.body.id, req.body.nom, req.body.description, req.body.dateDebut, req.body.lieu, req.body.createur, req.body.creneaux);
    res.json(event);
});

app.listen(3000, function() {
    console.log('Node Events app listening on port 3000!');
});