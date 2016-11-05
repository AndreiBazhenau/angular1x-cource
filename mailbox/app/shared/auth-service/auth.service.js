angular.module('shared.module').service('AuthService', ['$q', function($q) {

    // TODO : make real REST request

    var authenticatedUser;
    var isAuthenticated = false;

    this.authenticate = function(login, password) {
        if (login == 'test' && password == 'test') {
            isAuthenticated = true;
            authenticatedUser = login;
            return $q.resolve(true);
        } else {
            return $q.resolve(false);
        }
    };

    this.isAuthenticated = function() {
        return isAuthenticated;
    };

    this.getAuthenticatedUser = function() {
        return authenticatedUser;
    }

    this.logout = function() {
        isAuthenticated = false;
        authenticatedUser = null;
    };

}]);