'use strict';
angular
    .module('portafolio.languageSelect', [])
    .directive('selectLanguage', selectLanguage);

function selectLanguage() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'views/languageSelect.html',
        controller: LanguageController,
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}

LanguageController.$inject = ['$translate', 'localStorageService', 'LOCALES'];

function LanguageController($translate, localStorageService, LOCALES) {
    var vm = this;
    vm.locales = LOCALES.locales;
    vm.defaultLang = localStorageService.get('lang');
    vm.toggleLanguage = toggleLanguage;
    if (!vm.defaultLang) {
        vm.defaultLang = LOCALES.preferredLocale;
        localStorageService.set('lang', vm.defaultLang);
    }
    $translate.use(vm.defaultLang);

    function toggleLanguage(lang) {
            $translate.use(lang);
            localStorageService.set("lang", lang);
    };
}