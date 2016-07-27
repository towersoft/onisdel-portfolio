'use strict';

describe('ContactController', function() {
    beforeEach(module('portafolio.contacts'));
    beforeEach(module('portafolio.services'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('unit test', function() {
        it('controller is defined', function() {
            var vm = {};
            var controller = $controller('ContactController', { vm: vm });
            vm.contacts = [{name: 'a'}];
            expect(vm.contacts.length).toEqual(1);
        });

    });


});

//describe('portafolio.contact module', function() {
//
//    beforeEach(module('portafolio.contact'));
//
//    describe('view1 controller', function(){
//
//        it('should ....', inject(function($controller) {
//            //spec body
//            var view1Ctrl = $controller('ContactController');
//            expect(view1Ctrl).toBeDefined();
//        }));
//
//    });
//});