var listeEvents = {};
var Events = [];

function Evenement(createur, nom, description, date, creneaux, lieu) {
    this.createurEvent = createur;
    this.nomEvent = nom;
    this.descriptionEvent = description;
    this.dateEvent = date;
    this.creneauxEvent = creneaux;
    this.lieuEvent = lieu;
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
    return Events;
}

var updateEvent = function (event) {
    //console.log('updateEvent' + "\n createur : " + event.createurEvent + "\n nom: " + event.nomEvent + "\n description : " + event.descriptionEvent + "\n date : " + event.dateEvent + "\n creneaux : " + event.creneauxEvent + "\n lieu : " + event.lieuEvent);
    var eventToReplace = Events[Events.findIndex(x => x.nomEvent == event.nomEvent)];
    //console.log('eventToReplace' + "\n createur : " + eventToReplace.createurEvent + "\n nom: " + eventToReplace.nomEvent + "\n description : " + eventToReplace.descriptionEvent + "\n date : " + eventToReplace.dateEvent + "\n creneaux : " + eventToReplace.creneauxEvent + "\n lieu : " + eventToReplace.lieuEvent);
    var indexToReplace = Events.findIndex(x => x.nomEvent == event.nomEvent);
    Events[indexToReplace] = event;
    return Events[indexToReplace];
}

var getEvenementByNom = function (nom) {
    if (typeof listeEvents[nom] === 'undefined') {
        return false;
    }
    return listeEvents[nom];
}

exports.creer = creer;
exports.getListeEvenements = getListeEvenements;
exports.updateEvent = updateEvent;
exports.getEvenementByNom = getEvenementByNom;