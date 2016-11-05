angular.module('main.module').component('mainLayout',  {
    templateUrl: 'main/main-layout.component.html',
    controller: ['$state', 'AuthService', function($state, AuthService) {
        this.logout = function() {
            AuthService.logout();
            $state.go('login');
        };

        this.getAuthenticatedUser = function() {
            return AuthService.getAuthenticatedUser();
        };

        this.isAuthenticated = function () {
            return AuthService.isAuthenticated();
        }
    }]
});
