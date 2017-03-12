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
    'nemLogging'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/creer-event', {
        templateUrl: 'views/creerevent.html',
        controller: 'CreerCtrl',
        controllerAs: 'creer'
      })
      .when('/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'InspriptionCtrl',
        controllerAs: 'inscr'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
