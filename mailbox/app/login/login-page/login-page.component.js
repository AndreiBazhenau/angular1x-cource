angular.module('login.module').component('loginPage', {
    templateUrl: 'login/login-page/login-page.component.html' ,
    controller: ['$state', 'AuthService', 'StateService', function($state, AuthService, StateService) {
        var ctx = this;
        this.showError = false;

        this.login = function() {
            var isAuthenticated = AuthService.authenticate(this.credentials.username, this.credentials.password);
            if (isAuthenticated) {
                var previousState = StateService.getLoginRedirectState();
                $state.go(previousState.state, previousState.params, { reload: true });
            } else {
                this.errorMessage = true;
            }
        };
    }]
});

