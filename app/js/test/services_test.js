'use strict';

describe('DataService', function() {
    beforeEach(module('portafolio.services'));

    var $service;

    beforeEach(inject(function(_$factory_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $service = _$factory_;
    }));

    describe('unit test', function() {
        it('service is defined', function() {
            var service = $service('DataService', {});
            expect(service).toBeDefined();
        });
    });
});
