'use strict';
angular.module('portafolio', [
    'pascalprecht.translate',
    'ngCookies',
    'LocalStorageModule',
    'portafolio.localeService',
    'portafolio.languageSelect',
    'portafolio.services',
    'portafolio.routes',
    'portafolio.header',
    'portafolio.projects',
    'portafolio.skills',
    'portafolio.contacts'
]).constant('LOCALES', {
    'locales': [
        {'lang': 'es_ES', 'name': 'Español'},
        {'lang': 'en_US', 'name': 'English'}
    ],
    'preferredLocale': 'en_US'
});