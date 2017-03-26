var listeUtilisateurs = {};

function Utilisateur(pseudo, password, nom, prenom) {
    this.pseudo = pseudo;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
}

var creer = function (pseudo, password, nom, prenom) {
    if (typeof listeUtilisateurs[pseudo] === 'undefined') {
        listeUtilisateurs[pseudo] = new Utilisateur(pseudo, password, nom, prenom);
        //console.log('creerUtilisateur' + "\n Pseudo : " + pseudo + "\n Mot de passe : " + password + "\n Nom : " + nom + "\n Prenom : " + prenom);
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

exports.creer = creer;
exports.getListeUtilisateurs = getListeUtilisateurs;
exports.getUtilisateurByPseudo = getUtilisateurByPseudo;
