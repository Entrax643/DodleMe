'use strict';
angular.module('dodleme')
  .controller('HeaderCtrl', function ($scope, $localStorage) {
    $scope.$storage = $localStorage;
  });
