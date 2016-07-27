'use strict';

angular.module("portafolio.projects",[]).controller('ProjectsController', ProjectsController);
ProjectsController.$inject = ['DataService'];
function ProjectsController(DataService) {
    var vm = this;
    vm.loadProjects = loadProjects;

    function loadProjects() {
        DataService.loadProjects()
            .then(getDataComplete);
    }

    function getDataComplete(projects) {
        if (projects !== 'Error') {
            vm.projects = projects;
        }
        console.log('data: ', projects)
    }

}
