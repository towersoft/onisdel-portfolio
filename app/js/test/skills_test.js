'use strict';

describe('SkillsController', function() {
    beforeEach(module('portafolio.skills'));
    beforeEach(module('portafolio.services'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('unit test', function() {
        it('controller is defined', function() {
            var vm = {};
            var controller = $controller('SkillsController', { vm: vm });
            expect(controller).toBeDefined();
        });
    });
});