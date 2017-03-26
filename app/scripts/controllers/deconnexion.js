'use strict';
angular.module('dodleme')
    .controller('DeconnexionCtrl', function ($rootScope, $scope, $location, $localStorage) {
        $scope.disconnect = function () {
            $localStorage.$reset();
            $location.path("/connexion");
        };
    });