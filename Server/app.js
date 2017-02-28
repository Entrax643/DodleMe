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
app.post('/creerEvenement/:id', function(req, res) {
    gestionEvents.creerEvenement(req.params.id);

    res.json(gestionEvents.creerEvenements(req.params.id, req.params.nom, req.params.description, req.params.dateDebut, req.params.lieu, req.params.createur, req.params.creneaux)); //id, nom, description, dateDebut, lieu, createur, creneaux
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});