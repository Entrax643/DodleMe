var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var gestionEvents = require('./gestionEvenements.js');
var gestionUtilisateurs = require('./gestionUtilisateurs.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//Events
//retourne tous les évènements
app.get('/events', function (req, res) {
    console.log('getListeEvenements');
    console.log(gestionEvents.getListeEvenements());
    res.json(gestionEvents.getListeEvenements());
});

//retourne un évènement à partir de son nom
app.get('/event/:nom', function (req, res) {
    console.log('getEvenement' + " \n Nom : " + req.params.nom);
    res.json(gestionEvents.getEvenementByNom(req.params.nom));
});

//permet de créer un évènement
app.post('/creerEvent/', function (req, res) {
    var event = gestionEvents.creer(req.body.createurEvent, req.body.nomEvent, req.body.descriptionEvent, req.body.dateEvent, req.body.creneauxEvent, req.body.lieuEvent);
    res.json(event);
});

//permet d'associer un utilisateur aux créneaux d'un évènement
app.put('/updateEvent/', function (req, res) {
    var updateEvent = gestionEvents.updateEvent(req.body);
    res.json(updateEvent);
});

app.post('/ajouterUser/:idUtil/:idEvent/:disponibilite/:heureDebut', function (req, res) {
    var event = getEvenementByNom(id);
    gestionEvents.getCreneauByHeureDebut(req.params.idUtil, req.params.idEvent, req.params.disponibilite, req.params.heureDebut);
});

app.post('/event/ajouterCreneau/:id', function (req, res) {
    var event = gestionEvents.getEvenementByNom(req.params.id);
    event.creneaux.push(req.body.creneaux);
    res.json(event);
});

//Users
//retourne tous les utilisateurs
app.get('/utilisateurs', function (req, res) {
    console.log('getListeUtilisateurs');
    console.log(gestionUtilisateurs.getListeUtilisateurs());
    res.json(gestionUtilisateurs.getListeUtilisateurs());
});

//retourne un utilisateur à partir de son pseudo
app.get('/utilisateur/:pseudo', function (req, res) {
    console.log('getUtilisateur' + " \n ID : " + req.params.pseudo);
    res.json(gestionUtilisateurs.getUtilisateurByPseudo(req.params.pseudo));
});

//permet de créer un utilisateur
app.post('/creerUtilisateur/', function (req, res) {
    var user = gestionUtilisateurs.creer(req.body.pseudo, req.body.password, req.body.nom, req.body.prenom);
    res.json(user);
});

//Listen
app.listen(5000, function () {
    console.log('Node Events app listening on port 5000!');
});