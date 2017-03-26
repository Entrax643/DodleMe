'use strict';
angular.module('dodleme')
  .factory('NodeService', function ($http) {

    // private functions
    function handleSuccess(data) {
      return { success: true, message: data };
    }

    function handleError(data) {
      return { success: false, message: data };
    }

    //Utilisateurs

    /**
    * Crée un utilisateur
    @constructor
    * @param {string} user - Un utilisateur
    */
    function creerUser(user) {
      return $http.post(this.path + 'creerUtilisateur', user).then(handleSuccess, handleError('Erreur lors de la création de l\'utilisateur'));
    }
    /**
    * retourne un utilisateur
    * @param {string} pseudo - Le pseudonyme d'un utilisateur
    */
    function getUserByPseudo(pseudo) {
      return $http.get(this.path + 'utilisateur/' + pseudo).then(handleSuccess, handleError('Erreur lors de la récupération de l\'utilisateur'));
    }
    /**
    * retourne tous les utilisateurs
    */
    function getAllUsers() {
      return $http.get(this.path + 'utilisateurs').then(handleSuccess, handleError('Erreur lors de la récupération des utilisateurs'));
    }

    //Evenements
    /**
    * Crée un évènement
    * @param {string} event - l'évènement à créer
    */
    function creerEvent(event) {
      return $http.post(this.path + 'creerEvent', event).then(handleSuccess, handleError('Erreur lors de la création de l\'évènement'));
    }
    /**
    * retourne un évènement
    * @param {string} nom - le nom de l'évènement à créer
    */
    function getEventByNom(nom) {
      return $http.get(this.path + 'event/' + nom).then(handleSuccess, handleError('Erreur lors de la récupération de l\'utilisateur'));
    }
    /**
    * retourne tous les évènements
    */
    function getAllEvents() {
      return $http.get(this.path + 'events').then(handleSuccess, handleError('Erreur lors de la récupération des évènements'));
    }
    /**
    * Met à jour un évènement
    * @param {string} event - l'évènement, avec les modifications à apporter
    */
    function updateEvent(event) {
      return $http.put(this.path + 'updateEvent', event).then(handleSuccess, handleError('Erreur lors de la récupération des évènements'));
    }

    var service = {};
    service.creerUser = creerUser;
    service.getUserByPseudo = getUserByPseudo;
    service.getAllUsers = getAllUsers;
    service.creerEvent = creerEvent;
    service.getEventByNom = getEventByNom;
    service.getAllEvents = getAllEvents;
    service.updateEvent = updateEvent;
    service.path = 'http://localhost:5000/';
    return service;
  });