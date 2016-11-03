angular.module('login.module', ['shared.module', 'ui.router']);

angular.module('login.module').config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        template: '<login-page></login-page>'
    });
}]);