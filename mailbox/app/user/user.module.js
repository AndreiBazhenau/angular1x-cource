angular.module('user.module', ['ui.router', 'restangular']);

angular.module('user.module').config(['RestangularProvider', '$stateProvider', function(RestangularProvider, $stateProvider) {
    RestangularProvider.setBaseUrl('http://test-api.javascript.ru/v1/abazhenau');
    RestangularProvider.setRestangularFields({ id: "_id" });

    $stateProvider.state('users', {
        url: '/users',
        template: '<users-page></users-page>'
    });

    $stateProvider.state('users.user-detailed', {
        url: '/user/:userId',
        template: '<user-item-detailed user-id = "userId" ></user-item-detailed>',
        controller: ['$scope', '$stateParams', function($scope, $stateParams) {
            $scope.userId = $stateParams.userId;
        }]
    });

    $stateProvider.state('users.user-edit', {
        url: '/user-edit/:userId',
        template: '<user-item-edit user-id = "userId" ></user-item-edit>',
        controller: ['$scope', '$stateParams', function($scope, $stateParams) {
            $scope.userId = $stateParams.userId;
        }]
    });

    $stateProvider.state('users.user-new', {
        url: '/user-new',
        template: '<user-item-edit></user-item-edit>'
    });
}]);


