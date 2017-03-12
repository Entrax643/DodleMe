app.controller("InscriptionController", function ($scope, Services) {

    $scope.info = "Nada";

    $scope.user = { prenom: 'Guillaume', nom: 'Fines' };

    $scope.register = function register() {
        $scope.dataLoading = true;
        Services.creerUser($scope.user)
            .then(function (response) {
                if (response.data.success) {
                    $scope.info = response.data;
                    $scope.dataLoading = false;
                } else {
                    $scope.info = response.data;
                    $scope.dataLoading = false;
                }
            });
    }
});