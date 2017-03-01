var listeEvents = {};

function Evenement(id, nom) {
    this.id = id;
    this.nom = nom;
}

function Evenement(id, nom, description, dateDebut, lieu, createur, creneaux) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.createur = createur;
    this.creneaux = creneaux;
}

var creer = function(id, nom, description, dateDebut, lieu, createur, creneaux) {
    if (typeof listeEvents[id] === 'undefined') {
        listeEvents[id] = new Evenement(id, nom, description, dateDebut, lieu, createur, creneaux);
        return 1;
    }
    return 0;
}
var getListeEvenements = function() {
    return listeEvents;
}
var getEvenementById = function(id) {
    return listeEvents[id];
}

exports.creer = creer;
exports.getListeEvenements = getListeEvenements;
exports.getEvenementById = getEvenementById;