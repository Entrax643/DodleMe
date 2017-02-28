var listeEvents = {};

function Evenement(id, nom, description, dateDebut, lieu, createur) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.createur = createur;
}

function Evenement(id, nom, description, dateDebut, lieu, createur, creneaux) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.createur = createur;
    this.creneaux = creneaux;
}

var creerEvenement = function(id, nom, description, dateDebut, lieu, createur, creneaux) {
    if (typeof listeEvents[id] === 'undefined') {
        if (typeof creneaux === 'undefined') { //si l'utilisateur n'a pas défini de créneau
            listeEvents[id] = new Evenement(id, nom, description, dateDebut, lieu, createur);
            return id; //un event a été créé
        } else { //si un ou plusieurs créneaux ont été définis
            listeEvents[id] = new Evenement(id, nom, description, dateDebut, lieu, createur, creneaux);
            return id; //un event a été créé
        }
        return 0; //rien n'a été créé
    }
};
var positionDeLEvenement = function(id) {
    //console.log(listeComptes);
    // s'il n'existe pas
    if (typeof listeEvents[id] === 'undefined')
        return {};
    return listeEvents[id].position;
};

exports.creerEvenements;
exports.positionDeLEvenement;