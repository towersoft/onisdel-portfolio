'use strict';
angular.module('portafolio', [
    'ngRoute'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    //$routeProvider.otherwise({redirectTo: '/test'});
}]);