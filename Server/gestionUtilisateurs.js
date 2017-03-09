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
        return getEvenementById(id);
    }
    return { "erreur": "Existe déjà !" };
}

var creerURL = function(id, nom) {
    if (typeof listeEvents[id] == 'undefined') {
        listeEvents[id] = new Evenement(id, nom);
        return getEvenementById(id);
    }
    return { "erreur": "Existe déjà!" };
}
var getListeEvenements = function() {
    return listeEvents;
}
var getEvenementById = function(id) {
    return listeEvents[id];
}
var getCreneauById = function(id) {
    return listeEvents[id].creneaux[id];
}
var getCreneauByHeureDebut = function(idUtilisateur, idEvent, disponibilite, heureDebut) {
    listeEvents[id].creneaux.forEach(function(creneau) {
        if (creneau.heureDebut == heureDebut) {
            creneau.utilisateurs.push(idUtilisateur, disponibilite);
        }
    });
}

elements.forEach(function(element) {
    var attribute = element.getAttribute('data-attr');
    element.onclick = function() {
        alert(attribute);
    };
});

exports.creer = creer;
exports.getListeEvenements = getListeEvenements;
exports.getEvenementById = getEvenementById;
exports.creerURL = creerURL;
exports.getCreneauById = getCreneauById;
exports.getCreneauByHeureDebut = getCreneauByHeureDebut;