var listeEvents = {};

function Evenement(id) {
    this.id = id;
}

function Evenement(id, nom, description, dateDebut, lieu, createur, creneaux) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.createur = createur;
    this.creneaux = creneaux;
}

var creer = function(id /*, nom, description, dateDebut, lieu, createur, creneaux*/ ) {
    listeEvents[id] = new Evenement(id);
    return listeEvents[id];
    /*if (typeof listeEvents[id] === 'undefined') {
        if (typeof creneaux === 'undefined') { //si l'utilisateur n'a pas défini de créneau
            listeEvents[id] = new Evenement(id, nom, description, dateDebut, lieu, createur);
            return id; //un event a été créé
        } else { //si un ou plusieurs créneaux ont été définis
            listeEvents[id] = new Evenement(id, nom, description, dateDebut, lieu, createur, creneaux);
            return id; //un event a été créé
        }
        return 0; //rien n'a été créé
    }*/
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