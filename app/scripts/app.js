'use strict';

/**
 * @ngdoc overview
 * @name frontApp
 * @description
 * # frontApp
 *
 * Main module of the application.
 */
angular
  .module('dodleme', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMaterialDatePicker',
    'uiGmapgoogle-maps',
    'ngStorage',
    'nemLogging'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tousLesEvenements.html',
        controller: 'TousLesEvenementsCtrl',
        controllerAs: 'tousLesEvenements'
      })
      .when('/tousLesEvenements', {
        templateUrl: 'views/tousLesEvenements.html',
        controller: 'TousLesEvenementsCtrl',
        controllerAs: 'tousLesEvenements'
      })
      .when('/mesEvents', {
        templateUrl: 'views/mesEvents.html',
        controller: 'MesEventsCtrl',
        controllerAs: 'mesEvents'
      })
      .when('/creerEvent', {
        templateUrl: 'views/creerEvent.html',
        controller: 'CreerEventCtrl',
        controllerAs: 'creerEvent'
      })
      .when('/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl',
        controllerAs: 'inscription'
      })
      .when('/connexion', {
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl',
        controllerAs: 'connexion'
      })
      .when('/deconnexion', {
        templateUrl: 'views/deconnexion.html',
        controller: 'DeconnexionCtrl',
        controllerAs: 'deconnexion'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
