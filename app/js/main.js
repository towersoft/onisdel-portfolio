'use strict';
angular.module('portafolio', [
    'pascalprecht.translate',
    'tmh.dynamicLocale',
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
        'ru_ES': 'Español',
        'en_US': 'English'
    },
    'preferredLocale': 'en_US'
});