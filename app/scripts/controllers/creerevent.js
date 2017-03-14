'use strict';
angular.module('dodleme')
  .controller('CreerCtrl', function ($scope) {
    $scope.map = { center: { latitude: 43, longitude: 1 }, zoom: 8 };
  });
