'use strict';
angular.module('dodleme')
    .controller('InscriptionCtrl', function ($scope, NodesServices) {
        $scope.user = { prenom: 'Guillaume', nom: 'Fines' };
        $scope.register = function register() {
            $scope.dataLoading = true;
            NodesServices.creerUser($scope.user)
                .then(function (response) {
                    if (response.success) {
                        if (response.message.data) {
                            $scope.error = "";
                            $scope.info = "Inscription réussie, Bienvenue " + $scope.user.pseudo;
                        } else {
                            $scope.info = "";
                            $scope.error = "Le Pseudo " + $scope.user.pseudo + " est déjà utilisé";
                        }
                        $scope.dataLoading = false;
                    } else {
                        $scope.info = "Erreur lors de l'inscription : \n";
                        $scope.error = response.message;
                        $scope.dataLoading = false;
                    }
                });
        };
    });