'use strict';
angular.module('dodleme')
    .controller('TousLesEvenementsCtrl', function ($scope, $localStorage, NodeService, mdcDateTimeDialog) {
        init();
        $scope.$storage = $localStorage;

        $scope.sortType = 'dateEvent';
        $scope.sortR = false;
        $scope.searchQ = '';

        function init() {
            NodeService.getAllEvents()
                .then(function (response) {
                    $scope.allEvents = response.message.data;
                    $scope.notifications = [];
                    $scope.allEvents.forEach(function (item, index) {
                        if ($scope.estPresent(item) && !$scope.wasNotified(item) && item.creneauCloturation) {
                            $scope.notifications.push(item);
                            $scope.notify(item);
                            NodeService.updateEvent(item);
                        }
                    })
                });
        }

        $scope.selectEvent = function (event) {
            $scope.selectedEvent = event;
            $scope.participants = [];
            $scope.selectedEvent.creneauxEvent.forEach(function (item, index) {
                if ($scope.estCreateur($scope.selectedEvent) && !item.listeUtilisateurs[item.listeUtilisateurs.findIndex(x => x.Utilisateur == $scope.$storage.pseudo)])
                    item.listeUtilisateurs.push({ Utilisateur: $scope.$storage.pseudo, presence: true, notified: true });
                if (!item.listeUtilisateurs[item.listeUtilisateurs.findIndex(x => x.Utilisateur == $scope.$storage.pseudo)])
                    item.listeUtilisateurs.push({ Utilisateur: $scope.$storage.pseudo, presence: false, notified: false });
                $scope.participantsSelectedEvent = item.listeUtilisateurs.length;
                $scope.indexUtilisateur = item.listeUtilisateurs.findIndex(x => x.Utilisateur == $scope.$storage.pseudo);
                $scope.participants[item.heure] = $scope.getParticipant(item);
            })
            $scope.meilleurCreneau = $scope.getMeilleurCreneau($scope.selectedEvent);
            $scope.updateEvent();
        }

        $scope.updateEvent = function () {
            $scope.selectedEvent.creneauxEvent.forEach(function (item, index) {
                var nbUtilisateur = 0;
                item.listeUtilisateurs.forEach(function (item, index) {
                    if (item.presence)
                        nbUtilisateur++;
                });
                item.nbUtilisateur = nbUtilisateur;
            });
            //$scope.error = $scope.selectedEvent.creneauxEvent;
            NodeService.updateEvent($scope.selectedEvent);
        }

        $scope.cloturerEvent = function () {
            $scope.selectedEvent.creneauCloturation = $scope.meilleurCreneau.creneau.heure;
            NodeService.updateEvent($scope.selectedEvent);
        }

        $scope.getParticipant = function (creneau) {
            var participants = [];
            creneau.listeUtilisateurs.forEach(function (item, index) {
                if (item.presence) {
                    participants.push({ Utilisateur: item.Utilisateur });
                    //participants += " " + item.Utilisateur;
                }
            });
            return participants;
        }

        $scope.getMeilleurCreneau = function (event) {
            var creneau = {};
            var indexCreneau;
            var nbParticipants = 0;
            event.creneauxEvent.forEach(function (item, index) {
                if ($scope.getParticipant(item).length > nbParticipants) {
                    indexCreneau = index;
                    nbParticipants = $scope.getParticipant(item).length;
                }
            });
            creneau.indexCreneau = indexCreneau;
            creneau.nbParticipants = nbParticipants;
            creneau.creneau = event.creneauxEvent[indexCreneau];
            return creneau;
        }

        $scope.estCreateur = function (event) {
            if (event.createurEvent == $scope.$storage.pseudo) {
                return true;
            }
            return false;
        }

        $scope.estPresent = function (event) {
            var estPresent = false;
            event.creneauxEvent.forEach(function (item, index) {
                if (item.listeUtilisateurs[item.listeUtilisateurs.findIndex(x => x.Utilisateur == $scope.$storage.pseudo)] && !$scope.estCreateur(event)) {
                    estPresent = item.listeUtilisateurs[item.listeUtilisateurs.findIndex(x => x.Utilisateur == $scope.$storage.pseudo)].presence || estPresent;
                }
            });
            return estPresent;
        }

        $scope.wasNotified = function (event) {
            var wasNotified = false;
            event.creneauxEvent.forEach(function (item, index) {
                if (item.listeUtilisateurs[item.listeUtilisateurs.findIndex(x => x.Utilisateur == $scope.$storage.pseudo)] && !$scope.estCreateur(event)) {
                    wasNotified = item.listeUtilisateurs[item.listeUtilisateurs.findIndex(x => x.Utilisateur == $scope.$storage.pseudo)].notified;
                }
            });
            return wasNotified;
        }

        $scope.notify = function (event) {
            event.creneauxEvent.forEach(function (item, index) {
                item.listeUtilisateurs[item.listeUtilisateurs.findIndex(x => x.Utilisateur == $scope.$storage.pseudo)].notified = true;
            });
        }
    });