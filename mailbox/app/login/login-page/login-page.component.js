angular.module('login.module').component('loginPage', {
    templateUrl: 'app/login/login-page/login-page.component.html' ,
    controller: ['$state', function($state) {
        var ctx = this;

        this.login = function() {
            // TODO : implement me
        };
    }]
});

