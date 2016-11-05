angular.module('home.module', ['app.config', 'shared.module', 'ui.router']);

angular.module('home.module').config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        template: '<home-page></home-page>',
        data: {
            needAuth: false
        }
    });
}]);


