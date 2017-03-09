var listeUtilisateurs = {};
var id = 0;
function Utilisateur(id, pseudo, password, nom, prenom) {
    this.id = id;
    this.pseudo = pseudo;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
}

var creer = function (pseudo, password, nom, prenom) {
    if (typeof listeUtilisateurs[id] === 'undefined') {
        listeUtilisateurs[id] = new Utilisateur(id, pseudo, password, nom, prenom);
        id++;
        return listeUtilisateurs[id-1];
    }
    return 0;
};

var getListeUtilisateurs = function () {
    return listeUtilisateurs;
};

var getUtilisateurById = function (id) {
    return listeUtilisateurs[id];
};

exports.creer = creer;
exports.getListeUtilisateurs = getListeUtilisateurs;
exports.getUtilisateurById = getUtilisateurById;