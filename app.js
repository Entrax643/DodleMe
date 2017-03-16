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
app.use('/bower_components',express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//Events
app.get('/events', function(req, res) {
    res.json(gestionEvents.getListeEvenements());
});
app.get('/event/:id', function(req, res) {
    res.json(gestionEvents.getEvenementById(req.params.id));
});
app.post('/event', function(req, res) {
    var event = gestionEvents.creer(req.body.id, req.body.nom, req.body.description, req.body.dateDebut, req.body.lieu, req.body.createur, req.body.creneaux);
    res.json(event);
});
app.post('/ajouterUser/:idUtil/:idEvent/:disponibilite/:heureDebut', function(req, res) {
    var event = getEvenementById(id);
    gestionEvents.getCreneauByHeureDebut(req.params.idUtil, req.params.idEvent, req.params.disponibilite, req.params.heureDebut);
});
/*
{
    "id": "5",
    "nom": "test",
    "description": "description du projet",
    "createur": "user1",
    "creneaux": [{
            "dateDebut": "20-05-2017",
            "dateFin": "22-05-2017",
            "heureDebut": "15h",
            "heureFin": "16h",
            "utilisateurs" : [
                {"id": "user1", "dispo":"oui"},
                {"id": "user2", "dispo":"non"}
            ]
        },
        {
            "heureDebut": "19h",
            "heureFin": "21h"
        }
    ]
}
*/
app.post('/event/ajouterCreneau/:id', function(req, res) {
    var event = gestionEvents.getEvenementById(req.params.id);
    event.creneaux.push(req.body.creneaux);
    res.json(event);
});

//Users
app.get('/utilisateurs', function (req, res) {
    res.json(gestionUtilisateurs.getListeUtilisateurs());
});
app.get('/utilisateur/:pseudo', function (req, res) {
    console.log('getUtilisateur' + " \n ID : " + req.params.pseudo);
    res.json(gestionUtilisateurs.getUtilisateurByPseudo(req.params.pseudo));
});
app.post('/creerUtilisateur/', function (req, res) {
    var user = gestionUtilisateurs.creer(req.body.pseudo, req.body.password, req.body.nom, req.body.prenom);
    res.json(user);
});

//Listen
app.listen(5000, function () {
    console.log('Node Events app listening on port 5000!');
});