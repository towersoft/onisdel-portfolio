'use strict';

angular.module('portafolio').factory('DataService', DataService);
DataService.$inject = ['$http'];
function DataService($http) {
    var service = {
        loadData: loadData,
        loadProjects: loadProjects,
        loadSkills: loadSkills,
        loadContacts: loadContacts
    };
    return service;

    function loadData() {
        return $http.get(
            'stub/data.json')
            .then(getDataComplete)
            .catch(getDataFailed);
    }

    function getDataComplete(response) {
        return response.data;
    }

    function getDataFailed(error) {
        console.log('XHR Failed for load data.' + error.data);
        return 'Error';
    }

    function loadProjects() {
        return $http.get(
            'stub/projects.json')
            .then(getDataComplete)
            .catch(getDataFailed);
    }
    function loadContacts() {
        return $http.get(
            'stub/contacts.json')
            .then(getDataComplete)
            .catch(getDataFailed);
    }
    function loadSkills() {
        return $http.get(
            'stub/skills.json')
            .then(getDataComplete)
            .catch(getDataFailed);
    }
}
