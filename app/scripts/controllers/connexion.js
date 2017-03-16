'use strict';
angular.module('dodleme')
    .controller('ConnexionCtrl', function ($rootScope, $scope, $location, NodesServices) {
        $scope.pseudo = "Entrax";
        $scope.login = function login() {
            $scope.dataLoading = true;
            NodesServices.getUserByPseudo($scope.pseudo)
                .then(function (response) {
                    if (response.success) {
                        if (response.message.data) {
                            $rootScope.user = response.message.data;
                            $rootScope.isConnected = true;
                            if ($scope.password == $scope.user.password) {
                                $scope.error = "";
                                $scope.info = "Bienvenue " + $rootScope.user.prenom + " " + $rootScope.user.nom;
                            } else {
                                $scope.info = "";
                                $scope.error = "Mot de passe erroné";
                            }
                            $location.path("#!/");
                        } else {
                            $scope.info = "";
                            $scope.error = "Pseudo erroné";
                        }
                        $scope.dataLoading = false;
                    } else {
                        $scope.info = response.data;
                        $rootScope.user = $scope.user;
                        $scope.error = $rootScope.user;
                        $scope.dataLoading = false;
                    }
                });
        };
    });