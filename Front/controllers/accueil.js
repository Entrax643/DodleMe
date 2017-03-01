app.controller("AccueilController", function ($scope, Services) {
  $scope.test = function () {
    $scope.user = { id: '1', pseudo: 'Entrax' };
    Services.creerUser($scope.user)
      .then(function (response) {
        $scope.msg1 = response.data;
      });
  };
});