describe('users-item-edit component', function () {

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
            element = angular.element('<user-item-edit user-id="1"></user-item-edit>');
            element = $compile(element)(scope);
            scope.$apply();
        }));

        it('should render user information', function() {
            $httpBackend.flush();

            var detailsBlock = element.find('div').find('div');
            expect(detailsBlock.find('div').eq(0).find('input').val()).toBe(testUser.fullName);
            expect(detailsBlock.find('div').eq(1).find('input').val()).toBe(testUser.birthdate);
            expect(detailsBlock.find('div').eq(2).find('input').val()).toBe(testUser.gender);
            expect(detailsBlock.find('div').eq(3).find('input').val()).toBe(testUser.address);
            expect(detailsBlock.find('div').eq(4).find('input').val()).toBe(testUser.email);
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
            element = angular.element('<user-item-edit user-id="1"></user-item-edit>');
            element = $compile(element)(scope);
            scope.$apply();
        }));

        it('should save when press on save button', function() {
            $httpBackend.flush();

            var editUser = {
                _id: "1",
                fullName: "full name1 changed",
                birthdate: "12.02.2016",
                gender: "F",
                address: "address changed",
                email: "aa_changed@aa.ru"
            };

            $httpBackend.expect('DELETE', 'http://test-api.javascript.ru/v1/abazhenau/users/1')
                .respond({});
            $httpBackend.expect('POST', 'http://test-api.javascript.ru/v1/abazhenau/users', editUser)
                .respond({});

            var detailsBlock = element.find('div').find('div');
            detailsBlock.find('div').eq(0).find('input').val(editUser.fullName).triggerHandler('input');
            detailsBlock.find('div').eq(1).find('input').val(editUser.birthdate).triggerHandler('input');
            detailsBlock.find('div').eq(2).find('input').val(editUser.gender).triggerHandler('input');
            detailsBlock.find('div').eq(3).find('input').val(editUser.address).triggerHandler('input');
            detailsBlock.find('div').eq(4).find('input').val(editUser.email).triggerHandler('input');

            var saveButton = element.find('div').find('button').eq(1);
            saveButton.triggerHandler('click');
            $httpBackend.flush();
        });

        it('should delete when press on delete button', function() {
            $httpBackend.flush();

            $httpBackend.expect('DELETE', 'http://test-api.javascript.ru/v1/abazhenau/users/1')
                .respond({});

            var deleteButton = element.find('div').find('button').eq(2);
            deleteButton.triggerHandler('click');
            $httpBackend.flush();
        });
    });

});
