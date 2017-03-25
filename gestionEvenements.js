var listeEvents = {};
var Events = [];

function Evenement(createur, nom, description, date, creneaux, lieu) {
    this.createurEvent = createur;
    this.nomEvent = nom;
    this.descriptionEvent = description;
    this.dateEvent = date;
    this.creneauxEvent = creneaux;
    this.lieuEvent = lieu;
    this.Utilisateurs = [];
}

var creer = function (createur, nom, description, date, creneaux, lieu) {
    if (typeof listeEvents[nom] === 'undefined') {
        listeEvents[nom] = new Evenement(createur, nom, description, date, creneaux, lieu);
        Events.push(listeEvents[nom]);
        console.log('creerEvent' + "\n createur : " + createur + "\n nom: " + nom + "\n description : " + description + "\n date : " + date + "\n creneaux : " + creneaux + "\n lieu : " + lieu);
        return true;
    }
    return false;
}

var getListeEvenements = function () {
    //return listeEvents;
    return Events;
}

var getEvenementByNom = function (nom) {
    if (typeof listeEvents[nom] === 'undefined') {
        return false;
    }
    return listeEvents[nom];
}

exports.creer = creer;
exports.getListeEvenements = getListeEvenements;
exports.getEvenementByNom = getEvenementByNom;