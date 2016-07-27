'use strict';

angular.module("portafolio.routes",['ngRoute']).config(config);
function config($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
   // $locationProvider.html5Mode({
   //     enabled:true,
   //     requireBase:true
   // });
    $routeProvider
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .when('/projects', {
            templateUrl: 'views/projects.html'
        })
        .when('/skills', {
            templateUrl: 'views/skills.html'
        })
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .otherwise({redirectTo: '/home'});
}