'use strict';
angular.module('dodleme')
  .directive('googleplace', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, model) {
        var options = {
          types: [],
          componentRestrictions: {}
        };
        scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

        google.maps.event.addListener(scope.gPlace, 'place_changed', function () {
          scope.$apply(function () {
            scope.place = scope.gPlace.getPlace();
            //scope.info = scope.place;
            model.$setViewValue(element.val());
          });
        });
      }
    };
  })

  .controller('CreerEventCtrl', function ($scope, $localStorage, NodeService) {
    $scope.$storage = $localStorage;

    $scope.event = {
      createurEvent: $scope.$storage.pseudo,
      nomEvent: 'nomEvent',
      descriptionEvent: 'C\'est la fête !',
      dateEvent: '29-03-2017',
      creneauxEvent: [
        { heure: "00h-2h", selected: false, listeUtilisateurs: {} },
        { heure: "2h-4h", selected: false, listeUtilisateurs: {} },
        { heure: "4h-6h", selected: false, listeUtilisateurs: {} },
        { heure: "6h-8h", selected: false, listeUtilisateurs: {} },
        { heure: "8h-10h", selected: false, listeUtilisateurs: {} },
        { heure: "10h-12h", selected: false, listeUtilisateurs: {} },
        { heure: "12h-14h", selected: false, listeUtilisateurs: {} },
        { heure: "14h-16h", selected: true, listeUtilisateurs: {} },
        { heure: "16h-18h", selected: true, listeUtilisateurs: {} },
        { heure: "18h-20h", selected: true, listeUtilisateurs: {} },
        { heure: "20h-22h", selected: false, listeUtilisateurs: {} },
        { heure: "22h-00h", selected: false, listeUtilisateurs: {} }
      ],
      lieuEvent: 'Université-Paul-Sabatier, Toulouse, France'
    };

    $scope.addEvent = function () {
      $scope.dataLoading = true;
      NodeService.creerEvent($scope.event)
        .then(function (response) {
          if (response.success) {
            if (response.message.data) {
              $scope.error = "";
              $scope.info = "Création de l'évènement " + $scope.event.nomEvent + " réussie";
            } else {
              $scope.info = "";
              $scope.error = "Un évènement portant le nom " + $scope.event.nomEvent + " existe déjà";
            }
            $scope.dataLoading = false;
          } else {
            $scope.info = "Erreur lors de la création de l'évènement : ";
            $scope.error = response.message;
            $scope.dataLoading = false;
          }
        });
      $scope.dataLoading = false;
    };

    $scope.getEvent = function () {
      $scope.dataLoading = true;
      NodeService.getEventByNom($scope.event.nomEvent)
        .then(function (response) {
          $scope.info = response;
          if (response.success) {
            if (response.message.data) {
              $scope.info = $scope.creneaux;
              $scope.error = response.message.data.creneauxEvent;
              $scope.event = response.message.data;
              //$scope.creneaux = response.message.data.creneauxEvent;
              //$location.path("#!/tousLesEvenements");
            } else {
              $scope.info = "";
              $scope.error = "Nom d'évènement erroné";
            }
            $scope.dataLoading = false;
          } else {
            $scope.info = response.data;
            $scope.error = "Erreur lors de la récupération de l'évènement";
            $scope.dataLoading = false;
          }
        });
      $scope.dataLoading = false;
    };
  });
