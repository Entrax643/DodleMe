var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var gestionEvents = require('./gestionEvenements.js');
var gestionUtilisateurs = require('./gestionUtilisateurs.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('../Front'));
app.use('/bower_components', express.static('../Front/bower_components'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//Events
app.get('/events', function (req, res) {
    res.json(gestionEvents.getListeEvenements());
});
app.get('/event/:id', function (req, res) {
    res.json(gestionEvents.getEvenementById(req.params.id));
});
app.post('/creerEvent/', function (req, res) {
    var event = gestionEvents.creer(req.body.id, req.body.nom, req.body.description, req.body.dateDebut, req.body.lieu, req.body.createur, req.body.creneaux);
    res.json(event);
});

//Users
app.get('/utilisateurs', function (req, res) {
    res.json(gestionUtilisateurs.getListeUtilisateurs());
});
app.get('/utilisateur/:id', function (req, res) {
    console.log('creerUtilisateur' + " ID : " + req.params.id);
    res.json(gestionUtilisateurs.getUtilisateurById(req.params.id));
});
app.post('/creerUtilisateur/', function (req, res) {
    console.log('creerUtilisateur' + " ID : " + req.body.id + " Pseudo : " + req.body.pseudo);
    var user = gestionUtilisateurs.creer(req.body.id, req.body.pseudo);
    res.json(user);
});

//Listen
app.listen(3000, function () {
    console.log('Node Events app listening on port 3000!');
});