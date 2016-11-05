angular.module('login.module', ['app.config', 'shared.module', 'ui.router']);

angular.module('login.module').config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        template: '<login-page></login-page>',
        data: {
            needAuth: false
        }
    });
}]);