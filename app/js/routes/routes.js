'use strict';

angular.module("portafolio.routes", ['ngRoute']).config(config);
function config($routeProvider, $locationProvider, $translateProvider, tmhDynamicLocaleProvider) {
    $translateProvider.useMissingTranslationHandlerLog({
        prefix: 'resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('en_US');// is applied on first load
    //$translateProvider.useLocalStorage();// saves selected language to localStorage
    tmhDynamicLocaleProvider.localeLocationPattern('lib/angular-i18n/angular-locale_{{locale}}.js');

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