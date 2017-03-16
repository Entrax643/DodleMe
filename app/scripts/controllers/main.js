'use strict';
angular.module('dodleme')
  .controller('MainCtrl', function ($scope, $localStorage) {
    $scope.$storage = $localStorage;
  });
