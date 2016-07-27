'use strict';

angular.module('portafolio').factory('DataService', DataService);
DataService.$inject = ['$http'];
function DataService($http) {
    debugger;
    var service = {
        loadData: loadData
    };
    return service;

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
