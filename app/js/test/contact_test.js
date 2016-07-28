'use strict';

describe('ContactController', function () {
    beforeEach(module('portafolio.contacts'));
    beforeEach(module('portafolio.services'));

    var $controller, $dataService, httpBackend, ctrl;
    beforeEach(inject(function (_$controller_, _DataService_, _$httpBackend_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $dataService = _DataService_;
        httpBackend = _$httpBackend_;

        ctrl = $controller('ContactController', {
            DataService: $dataService
        });
        ctrl.dataService = $dataService
    }));
    it('test controller is defined', function () {
        expect(ctrl).toBeDefined();
    });
    it('test loadContacts', function () {
        httpBackend.whenGET('stub/contacts.json').respond({
            data: {
                profile: {
                    name: 'Onisdel'
                }
            }
        });
        ctrl.dataService.loadContacts().then(function (resp) {
            expect(resp.data.profile.name).toEqual("Onisdel");
        });
        httpBackend.flush();
    });
});
