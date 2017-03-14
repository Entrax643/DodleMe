'use strict';
angular.module('dodleme')
  .factory('NodesServices', function ($http) {

    // private functions
    function handleSuccess(data) {
      return data;
    }

    function handleError(error) {
      return function () {
        return { success: false, message: error };
      };
    }

    //Utilisateurs
    function creerUser(user) {
      return $http.post(this.path + 'creerUtilisateur', user).then(handleSuccess, handleError('Erreur lors de la création de l\'utilisateur'));
    }

    function getUserByID(id) {
      return $http.get(this.path + 'utilisateur/' + id).then(handleSuccess, handleError('Erreur lors de la récupération de l\'utilisateur'));
    }

    function getAllUsers() {
      return $http.get(this.path + 'utilisateurs').then(handleSuccess, handleError('Erreur lors de la récupération des utilisateurs'));
    }

    //Utilisateurs
    function creerEvent(event) {
      return $http.post(this.path + 'creerEvent', event).then(handleSuccess, handleError('Erreur lors de la création de l\'évènement'));
    }

    function getEvent(id) {
      return $http.get(this.path + 'event/' + id).then(handleSuccess, handleError('Erreur lors de la récupération de l\'évènement'));
    }

    function getAllEvents() {
      return $http.get(this.path + 'events').then(handleSuccess, handleError('Erreur lors de la récupération des évènements'));
    }

    var service = {};
    service.creerUser = creerUser;
    service.getUserByID = getUserByID;
    service.getAllUsers = getAllUsers;
    service.creerEvent = creerEvent;
    service.getEvent = getEvent;
    service.getAllEvents = getAllEvents;
    service.path = 'http://localhost:5000/';
    return service;
  });