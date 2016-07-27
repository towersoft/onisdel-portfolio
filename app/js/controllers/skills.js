'use strict';

angular.module("portafolio").controller('SkillsController', SkillsController);
SkillsController.$inject = ['DataService'];
function SkillsController(DataService) {
    var vm = this;
    vm.skills = {};
    vm.loadSkills = loadSkills;

    function loadSkills() {
        DataService.loadSkills()
            .then(getDataComplete);
    }

    function getDataComplete(skills) {
        if (skills !== 'Error') {
            vm.skills = skills;
        }
        console.log('data: ', skills)
    }
}
