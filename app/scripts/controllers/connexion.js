'use strict';
angular.module('dodleme')
    .controller('ConnexionCtrl', function ($scope, $location, $localStorage, NodesService) {
        $scope.pseudo = "Entrax";
        $scope.login = function login() {
            $scope.dataLoading = true;
            NodesService.getUserByPseudo($scope.pseudo)
                .then(function (response) {
                    if (response.success) {
                        if (response.message.data) {
                            $scope.user = response.message.data;
                            if ($scope.password == $scope.user.password) {

                                $localStorage.pseudo = $scope.user.pseudo ;
                                $localStorage.prenom = $scope.user.nom ;
                                $localStorage.nom = $scope.user.nom ;
                                $localStorage.isConnected = true;

                                $scope.error = "";
                                $scope.info = "Bienvenue " + $scope.user.prenom + " " + $scope.user.nom;
                            } else {
                                $scope.info = "";
                                $scope.error = "Mot de passe erroné";
                            }
                            //$location.path("#!/");
                        } else {
                            $scope.info = "";
                            $scope.error = "Pseudo erroné";
                        }
                        $scope.dataLoading = false;
                    } else {
                        $scope.info = response.data;
                        $scope.error ="Erreur lors de la connexion";
                        $scope.dataLoading = false;
                    }
                });
        };
    });