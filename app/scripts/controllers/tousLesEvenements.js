'use strict';
angular.module('dodleme')
    .controller('TousLesEvenementsCtrl', function($scope, $localStorage, NodeService, mdcDateTimeDialog) {
        loadAllEvents();
        $scope.$storage = $localStorage;

        $scope.sortType = 'dateEvent';
        $scope.sortR = false;
        $scope.searchQ = '';

        function loadAllEvents() {
            NodeService.getAllEvents()
                .then(function(response) {
                    $scope.allEvents = response.message.data;
                });
        }

        $scope.selectEvent = function(event) {
            //$scope.error = event;
            $scope.selectedEvent = event;
        }

        $scope.estCreateur = function(event) {
            if (event.createurEvent == $scope.$storage.pseudo) {
                return true;
            }
            return false;
        }

        $scope.estPresent = function(event) {
            event.Utilisateurs.forEach(function(item, index) {
                if (item.nom = $scope.$storage.pseudo && item.participe)
                    return true;
            })
            return false;
        }

        $scope.estAbsent = function(event) {
            event.Utilisateurs.forEach(function(item, index) {
                if (item.nom = $scope.$storage.pseudo && !item.participe)
                    return true;
            })
            return false;
        }
    });