'use strict';
angular.module('portafolio.languageSelect',[]).directive('ngTranslateLanguageSelect', ngTranslateLanguageSelect);
function ngTranslateLanguageSelect(LocaleService) {

    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/languageSelect.html',
        controller: function ($scope, $translate) {
            debugger;
            $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
            $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
            $scope.visible = $scope.localesDisplayNames &&
                $scope.localesDisplayNames.length > 1;

            $scope.changeLanguage = function (locale) {
                LocaleService.setLocaleByDisplayName(locale);
            };
        }
    };
}