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
    console.log(req.body);
    //var event = gestionEvents.creer(req.params.id, req.params.nom, req.params.description, req.params.dateDebut, req.params.lieu, req.params.createur, req.params.creneaux);
    //res.json(event);
});

app.listen(3000, function() {
    console.log('Node Events app listening on port 3000!');
});