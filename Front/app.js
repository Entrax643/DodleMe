var app = angular.module('dodleme',['ui.router']);
app.config(function($stateProvider) {
  var helloState = {
    name: 'liste',
    url: '/liste',
    templateUrl: './vues/listeevent.html'
  }

  var aboutState = {
    name: 'creer',
    url: '/creer',
    templateUrl: './vues/creerevent.html'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});

