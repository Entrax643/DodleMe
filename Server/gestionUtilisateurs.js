var listeUtilisateurs = {};

function Utilisateur(id, pseudo) {
    this.id = id;
    this.pseudo = pseudo;
}

var creer = function (id, pseudo) {
    if (typeof listeUtilisateurs[id] === 'undefined') {
        listeUtilisateurs[id] = new Utilisateur(id, pseudo);
        return listeUtilisateurs[id];
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