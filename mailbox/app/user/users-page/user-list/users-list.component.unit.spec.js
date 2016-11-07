describe('users-list component', function () {

    beforeEach(module('user.module'));
    beforeEach(module('templates'));

    var testUsers = [
        {
            _id: "1",
            fullName: "full name1"
        },
        {
            _id: "2",
            fullName: "full name2"
        }
    ];

    var $httpBackend;
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', 'http://test-api.javascript.ru/v1/abazhenau/users')
            .respond(testUsers);
    }));

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope.$new();
        element = angular.element('<user-list></user-list>');
        element = $compile(element)(scope);
        scope.$apply();
    }));

    it('should contain list of users', function() {
        $httpBackend.flush();
        var items = element.find("li");
        expect(items.eq(2).find('a').text()).toBe(testUsers[0].fullName);
        expect(items.eq(3).find('a').text()).toBe(testUsers[1].fullName);
    });

});