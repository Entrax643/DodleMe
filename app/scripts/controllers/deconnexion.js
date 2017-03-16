'use strict';
angular.module('dodleme')
    .controller('DeconnexionCtrl', function ($rootScope, $scope, $localStorage, NodesService) {
        $scope.disconnect = function login() {
            $localStorage.$reset();
            //$location.path("#!/");
        };
    });