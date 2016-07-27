'use strict';

angular.module("portafolio").controller('ContactController', ContactController);
ContactController.$inject = ['DataService'];
function ContactController(DataService) {

    var vm = this;
    vm.contacts = {};
    vm.loadContacts = loadContacts;

    function loadContacts() {
        DataService.loadContacts()
            .then(getDataComplete);
    }

    function getDataComplete(contacts) {
        if (contacts !== 'Error') {
            vm.contacts = contacts;
        }
        console.log('data: ', contacts)
    }

}
