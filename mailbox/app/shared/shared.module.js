angular.module('shared.module', []);

angular.module('shared.module').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('HttpErrorInterceptor');
    $httpProvider.interceptors.push('HttpRequestLoadIndicatorInterceptor');
}]);