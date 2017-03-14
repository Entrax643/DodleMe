var listeUtilisateurs = {};

function Utilisateur(pseudo, password, nom, prenom) {
    this.pseudo = pseudo;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
}

var creer = function (pseudo, password, nom, prenom) {
    var nextID = getNextID();
    if (typeof listeUtilisateurs[pseudo] === 'undefined') {
        listeUtilisateurs[pseudo] = new Utilisateur(pseudo, password, nom, prenom);
    }
    return 0;
};

var getListeUtilisateurs = function () {
    return listeUtilisateurs;
};

var getUtilisateurByPseudo = function (id) {
    return listeUtilisateurs[pseudo];
};

exports.creer = creer;
exports.getListeUtilisateurs = getListeUtilisateurs;
exports.getUtilisateurByPseudo = getUtilisateurByPseudo;