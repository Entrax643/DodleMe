'use strict';
angular.module('dodleme')
    .controller('DeconnexionCtrl', function ($rootScope, $scope, $localStorage) {
        $scope.disconnect = function () {
            $localStorage.$reset();
            //$location.path("#!/");
        };
    });