angular.module('user.module').service('UserService', ['$q', 'Restangular', function($q, Restangular) {

    this.getAll = function() {
        return Restangular.all('users').getList();
    };

    this.getOne = function(userId) {
        return Restangular.one('users', userId).get();
    };

    this.delete = function(user) {
        return user.remove();
    };

    this.save = function(user) {
        if (user._id) {
            var deferred = $q.defer();

            user.remove().then(function() {
                Restangular.all('users').post(user).then(function(user) {
                    deferred.resolve(user);
                });
            });

            return deferred.promise;
        } else {
            return Restangular.all('users').post(user);
        }
    };

}]);