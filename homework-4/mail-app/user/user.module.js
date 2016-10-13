angular.module('user.module', ['ui.router', 'restangular']);

angular.module('user.module').config(function(RestangularProvider, $stateProvider) {
    RestangularProvider.setBaseUrl('http://test-api.javascript.ru/v1/abazhenau');
    RestangularProvider.setRestangularFields({ id: "_id" });

    $stateProvider.state('users', {
        url: 'users',
        template: `<user-list></user-list>`
    });

    $stateProvider.state('user-detailed', {
        url: 'user/:userId',
        template: `<user-item-detailed user-id = "userId" ></user-item-detailed>`,
        controller: function($scope, $stateParams) {
            $scope.userId = $stateParams.userId;
        }
    });
});


