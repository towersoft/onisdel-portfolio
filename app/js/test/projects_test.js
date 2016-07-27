'use strict';

describe('ProjectsController', function() {
    beforeEach(module('portafolio'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('test', function() {
        it('test controller is defined', function() {
            var $scope = {};
            var controller = $controller(ProjectsController, { $scope: $scope });
            expect(controller).toBeDefined();
        });
    });
});