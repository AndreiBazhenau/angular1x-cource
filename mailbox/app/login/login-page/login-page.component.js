angular.module('login.module').component('loginPage', {
    templateUrl: 'login/login-page/login-page.component.html' ,
    controller: ['$state', 'AuthService', 'StateService', function($state, AuthService, StateService) {
        var ctx = this;
        this.showError = false;

        this.login = function() {
            if (this.credentials) {
                AuthService.authenticate(this.credentials.username, this.credentials.password).then(function(isAuthenticated) {
                    if (isAuthenticated) {
                        var previousState = StateService.getLoginRedirectState();
                        if (previousState) {
                            $state.go(previousState.state, previousState.params, {reload: true});
                        } else {
                            $state.go('home');
                        }
                    } else {
                        ctx.errorMessage = true;
                    }
                });
            } else {
                this.errorMessage = true;
            }
        };
    }]
});

