'use strict';

angular.module("portafolio.header", []).controller('HeaderController', HeaderController);
HeaderController.$inject = ['$translate', 'localStorageService', 'LOCALES'];
function HeaderController($translate, localStorageService, LOCALES) {
    var vm = this;
    vm.locales = LOCALES.locales;
    vm.defaultLang = localStorageService.get('lang');
    vm.toggleLanguage = toggleLanguage;
    if (!vm.defaultLang) {
        vm.defaultLang = LOCALES.preferredLocale;
        localStorageService.set('lang', vm.defaultLang);
    }
    $translate.use(vm.defaultLang);

    function toggleLanguage(index) {
        $translate.use(vm.defaultLang);
        localStorageService.set("lang",  vm.defaultLang);
    };
}


