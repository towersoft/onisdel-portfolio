'use strict';

describe('DataService', function () {
    beforeEach(module('portafolio.services'));

    var service, httpBackend;
    beforeEach(inject(function (_DataService_, _$httpBackend_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        service = _DataService_;
        httpBackend = _$httpBackend_;
    }));

    it('should have Auth service be defined', function () {
        expect(service).toBeDefined();
    });
    it('test service is defined', function () {
        httpBackend.whenGET('stub/data.json').respond({
            data: {
                profile: {
                    name: 'Onisdel'
                }
            }
        });
        service.loadData().then(function (resp) {
            expect(resp.data.profile.name).toEqual("Onisdel");
        });
        httpBackend.flush();
    });
});
