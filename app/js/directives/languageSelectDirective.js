'use strict';
angular.module('portafolio.languageSelect',[]).directive();
function ngTranslateLanguageSelect(LocaleService) {

    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/languageSelect.html',
        controller: function ($scope, $translate) {
        }
    };
}