'use strict';
angular.module('dodleme')
    .controller('DeconnexionCtrl', function ($rootScope, $scope, $location, NodesServices) {
        $scope.disconnect = function login() {
            $scope.dataLoading = true;
            $rootScope.user = "";
            $rootScope.isConnected = false;
            $scope.dataLoading = false;
        };
    });