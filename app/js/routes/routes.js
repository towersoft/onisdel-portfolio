'use strict';

angular.module('portafolio').config(config);
function config($routeProvider) {
    $routeProvider
        .when('/test', {
            templateUrl: 'views/header.html',
            controller: 'MainController',
            controllerAs: 'vm'
        });
}