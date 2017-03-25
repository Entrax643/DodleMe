var listeUtilisateurs = {};

function Utilisateur(pseudo, password, nom, prenom) {
    this.pseudo = pseudo;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
    this.listeEvents = [];
}

var creer = function (pseudo, password, nom, prenom) {
    if (typeof listeUtilisateurs[pseudo] === 'undefined') {
        listeUtilisateurs[pseudo] = new Utilisateur(pseudo, password, nom, prenom);
        console.log('creerUtilisateur' + "\n Pseudo : " + pseudo + "\n Mot de passe : " + password + "\n Nom : " + nom + "\n Prenom : " + prenom);
        return true;
    }
    return false;
};

var getListeUtilisateurs = function () {
    return listeUtilisateurs;
};

var getUtilisateurByPseudo = function (pseudo) {
    if (typeof listeUtilisateurs[pseudo] === 'undefined') {
        return false;
    }
    return listeUtilisateurs[pseudo];
};

var addEvent = function (pseudo, event, creneau, dispo) {
    user = getUtilisateurByPseudo(pseudo);
    if (typeof user.listeEvents[event] === 'undefined') {
        user.listeEvents[event] = { event: event, creneau: creneau, dispo: dispo };
        console.log('addEvent' + "\n Pseudo : " + pseudo + "\n Event : " + event + "\n Creneau : " + creneau + "\n Dispo : " + dispo);
        return true;
    }
    return false;
};

var removeEvent = function (pseudo, event) {
    user = getUtilisateurByPseudo(pseudo);
    if (typeof user.listeEvents[event] !== 'undefined') {
        user.listeEvents.splice(event, 1);
        console.log('removeEvent' + "\n Pseudo : " + pseudo + "\n Event : " + event);
        return true;
    }
    return false;
};

var getListeEventsByPseudo = function (pseudo) {
    return getUtilisateurByPseudo(pseudo).listeEvents;
};

exports.creer = creer;
exports.getListeUtilisateurs = getListeUtilisateurs;
exports.getUtilisateurByPseudo = getUtilisateurByPseudo;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.getListeEventsByPseudo = getListeEventsByPseudo;
