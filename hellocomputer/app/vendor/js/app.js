'use strict';



// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.intro',
  'myApp.recipes',
  'myApp.gallery',
  'myApp.contact',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/intro'});
}]);


