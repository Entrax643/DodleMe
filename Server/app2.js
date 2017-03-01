var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var gestionUtilisateurs = require('./gestionUtilisateurs.js');

app.use(bodyParser.json()); //parser du JSON
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('../Front')); 
app.use('/bower_components', 
     express.static('../Front/bower_components')); 

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/utilisateurs', function (req, res) {
    res.json(gestionUtilisateurs.getListeUtilisateurs());
});
app.get('/utilisateur/:id', function (req, res) {
    console.log('creerUtilisateur' + " ID : " + req.params.id);
    res.json(gestionUtilisateurs.getUtilisateurById(req.params.id));
});

app.post('/creerUtilisateur/:id/:pseudo', function (req, res) {
    console.log('creerUtilisateur' + " ID : " + req.params.id + " Pseudo : " + req.params.pseudo);
    var user = gestionUtilisateurs.creer(req.params.id, req.params.pseudo);
    res.json(user);
});

app.post('/creerUtilisateurJSON/', function (req, res) {
    console.log('creerUtilisateur' + " ID : " + req.body.id + " Pseudo : " + req.body.pseudo);
    var user = gestionUtilisateurs.creer(req.body.id, req.body.pseudo);
    res.json(user);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});