angular.module('user.module').service('UserService', ['Restangular', function(Restangular) {

    this.getAll = function() {
        return Restangular.one('users', this.userId).get();
    };

    this.getOne = function(userId) {
        return Restangular.one('users', userId).get();
    };

    this.delete = function(user) {
        return user.remove();
    };

}]);