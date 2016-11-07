describe('users-item-detailed component', function () {

    beforeEach(module('user.module'));
    beforeEach(module('templates'));

    beforeEach(function() {
        angular.mock.module({
            'AuthService': {
                isAuthenticated: function() {
                    return true;
                }
            }
        });
    });

    var testUser = {
        _id: "1",
        fullName: "full name1",
        birthdate: "10.02.2016",
        gender: "M",
        address: "address",
        email: "aa@aa.ru"
    };

    describe('Test render', function() {
        var $httpBackend;
        beforeEach(inject(function(_$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'http://test-api.javascript.ru/v1/abazhenau/users/1')
                .respond(testUser);
        }));

        var element;
        var scope;
        beforeEach(inject(function($rootScope, $compile){
            scope = $rootScope.$new();
            element = angular.element('<user-item-detailed user-id="1"></user-item-detailed>');
            element = $compile(element)(scope);
            scope.$apply();
        }));

        it('should render user information', function() {
            $httpBackend.flush();
            var detailsBlock = element.find('div').find('div').find('div');
            expect(detailsBlock.find('h3').text()).toBe(testUser.fullName);
            expect(detailsBlock.find('div').eq(0).find('span').text()).toBe(testUser.birthdate);
            expect(detailsBlock.find('div').eq(1).find('span').text()).toBe(testUser.gender);
            expect(detailsBlock.find('div').eq(2).find('span').text()).toBe(testUser.address);
            expect(detailsBlock.find('div').eq(3).find('span').text()).toBe(testUser.email);
        });
    });

    describe('Test actions', function() {
        var $httpBackend;
        beforeEach(inject(function(_$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'http://test-api.javascript.ru/v1/abazhenau/users/1', {})
                .respond(testUser);
        }));

        var element;
        var scope;
        beforeEach(inject(function($rootScope, $compile){
            scope = $rootScope.$new();
            element = angular.element('<user-item-detailed user-id="1"></user-item-detailed>');
            element = $compile(element)(scope);
            scope.$apply();
        }));

        it('should delete when press on delete button', function() {
            $httpBackend.flush();

            $httpBackend.expect('DELETE', 'http://test-api.javascript.ru/v1/abazhenau/users/1')
                .respond({});
            var deleteButton = element.find('div').find('button').eq(1);
            deleteButton.triggerHandler('click');
            $httpBackend.flush();
        });
    });

});