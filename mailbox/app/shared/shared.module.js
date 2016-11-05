angular.module('shared.module', ['app.config']);

angular.module('shared.module').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('HttpErrorInterceptor');
    $httpProvider.interceptors.push('HttpRequestLoadIndicatorInterceptor');
}]);

angular.module('shared.module').run(['$rootScope', '$state', 'AuthService', 'StateService',
    function($rootScope, $state, AuthService, StateService) {
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
            if (toState.data.needAuth && !AuthService.isAuthenticated()) {
                e.preventDefault();
                StateService.setLoginRedirectState(toState, toParams);
                $state.go('login');
            } else {
                StateService.setPreviousState(fromState, fromParams);
            }
        });
    }]);