angular.module('mailApp', ['main.module', 'home.module', 'login.module', 'user.module', 'mail.module', 'ui.router']);

angular.module('mailApp').config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/home');
}]);