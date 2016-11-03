angular.module('shared.module').factory('HttpErrorInterceptor', ['$q', function($q) {
    var httpErrorInterceptor = {
        responseError: function(rejection) {
            if (rejection.status == 401 || rejection.status == 405) {
                // TODO : go to login
            } else if (rejection.status == 403) {
                // TODO : go to previous state
            } else if (rejection.status == 404) {
                // TODO : go to home
            } else {
                // TODO : show error
            }

            return $q.reject(rejection);
        }
    };

    return httpErrorInterceptor;
}]);
