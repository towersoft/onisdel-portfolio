'use strict';

angular.module("portafolio").controller('ProjectsController', ProjectsController);
ProjectsController.$inject = ['$http'];
function ProjectsController($http) {
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
