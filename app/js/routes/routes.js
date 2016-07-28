'use strict';

angular.module("portafolio.routes", ['ngRoute', 'i18ng', 'ngSanitize']).config(['$i18ngProvider',config]);
function config($routeProvider, $locationProvider, $i18ngProvider) {
    //$translateProvider.useMissingTranslationHandlerLog({
    //    prefix: 'resources/locale-',// path to translations files
    //    suffix: '.json'// suffix, currently- extension of the translations
    //});
    //$translateProvider.preferredLanguage('en_US');// is applied on first load
    ////$translateProvider.useLocalStorage();// saves selected language to localStorage
    //tmhDynamicLocaleProvider.localeLocationPattern('lib/angular-i18n/angular-locale_{{locale}}.js');

   // $i18nextProvider.i18next = require('i18next');
   //
   // $i18nextProvider.options = {
   //     lng: 'es',
   //     useCookie: false,
   //     useLocalStorage: false,
   //     fallbackLng: 'dev',
   //     resGetPath: '/locales/__lng__/__ns__.json',
   //     defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
   // }
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