'use strict';

angular.module("portafolio",[]).controller('ContactController', ContactController);
ContactController.$inject = ['$http'];
function ContactController($http) {
    var vm = this;
    vm.loadData = loadData;

    loadData();
    function loadData() {
        return $http.get(
            'stub/data.json')
            .then(getDataComplete)
            .catch(getDataFailed);
        function getDataComplete(response) {
            return response.data;
        }

        function getDataFailed(error) {
            console.log('XHR Failed for load Profile.' + error.data);
        }
    }
}
