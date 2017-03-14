'use strict';
angular.module('dodleme')
    .controller('ConnexionController', function ($rootScope, $scope, NodesServices) {
        $scope.info = "Nada";
        $scope.user = { pseudo: 'Entrax' };
        $scope.login = function login() {
            $scope.dataLoading = true;
            NodesServices.getUserByID()
                .then(function (response) {
                    if (response.data.success) {
                        $scope.info = response.data;
                        $rootScope.user = $scope.user;
                        $scope.error = $rootScope.user;
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