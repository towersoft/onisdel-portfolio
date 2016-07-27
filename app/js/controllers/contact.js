'use strict';

angular.module("portafolio").controller('ContactController', ContactController);
ContactController.$inject = ['DataService'];
function ContactController(DataService) {

    var vm = this;
    vm.data = {};
    vm.loadData = loadData;

    loadData();
    function loadData() {
        DataService.loadData()
            .then(function (profile) {
                vm.data = profile;
                console.log('data: ', profile)
            })
            .catch(getDataFailed);

    }

    function getDataComplete(response) {


    }

    function getDataFailed(error) {
        console.log('XHR Failed for load Profile.' + error.data);
    }
}
