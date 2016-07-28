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
            templateUrl: 'views/contact.html',
            controller: ContactController,
            controllerAs: 'vm'
        })
        .when('/projects', {
            templateUrl: 'views/projects.html',
            controller: ProjectsController,
            controllerAs: 'vm'
        })
        .when('/skills', {
            templateUrl: 'views/skills.html',
            controller: SkillsController,
            controllerAs: 'vm'
        })
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .otherwise({redirectTo: '/home'});
}