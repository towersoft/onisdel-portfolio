'use strict';

angular.module("portafolio").controller('MainController', MainController);
MainController.$inject = ['$scope'];
function MainController(scope) {
    var vm = this;
    vm.name = 'a';
}
