'use strict';
angular.module('dodleme')
    .controller('TousLesEvenementsCtrl', function ($scope, $localStorage, NodeService, mdcDateTimeDialog) {
        loadAllEvents();
        $scope.$storage = $localStorage;

        $scope.sortType = 'dateEvent';
        $scope.sortR = false;
        $scope.searchQ = '';

        function loadAllEvents() {
            NodeService.getAllEvents()
                .then(function (response) {
                    $scope.allEvents = response.message.data;
                });
        }

        $scope.selectEvent = function (event) {
            $scope.selectedEvent = event;
            $scope.selectedEvent.creneauxEvent.forEach(function (item, index) {
                if (!item.listeUtilisateurs[$scope.$storage.pseudo])
                    item.listeUtilisateurs[$scope.$storage.pseudo] = false;
                $scope.participantsSelectedEvent = Object.keys(item.listeUtilisateurs).length;
            });
        }

        $scope.updateEvent = function () {
            $scope.info = $scope.selectedEvent;
            NodeService.updateEvent($scope.selectedEvent)
                .then(function (response) {
                    $scope.error = response;
                });
        }

        $scope.estCreateur = function (event) {
            if (event.createurEvent == $scope.$storage.pseudo) {
                return true;
            }
            return false;
        }
    });