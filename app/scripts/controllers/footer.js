'use strict';
angular.module('dodleme')
  .controller('FooterCtrl', function ($scope, $localStorage) {
    $scope.$storage = $localStorage;
  });
