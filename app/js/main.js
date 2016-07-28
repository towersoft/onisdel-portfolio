'use strict';
angular.module('portafolio', [
    'portafolio.localeService',
    'portafolio.languageSelect',
    'portafolio.services',
    'portafolio.routes',
    'portafolio.header',
    'portafolio.projects',
    'portafolio.skills',
    'portafolio.contacts'
]).constant('LOCALES', {
    'locales': {
        'es_ES': 'Español',
        'en_US': 'English'
    },
    'preferredLocale': 'en_US'
});