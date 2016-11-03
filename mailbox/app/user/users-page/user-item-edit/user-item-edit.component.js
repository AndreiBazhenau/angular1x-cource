angular.module('user.module').component('userItemEdit',  {
    bindings: {
        userId: "<"
    },
    templateUrl: 'user/users-page/user-item-edit/user-item-edit.component.html',
    controller: ['UserService', '$state', function(UserService, $state){
        var ctx = this;

        this.cancel = function() {
            if (this.userId) {
                $state.go('users.user-detailed', {userId: this.userId});
            } else {
                $state.go('users');
            }
        };

        this.delete = function() {
            UserService.delete(this.user).then(function() {
                $state.go('users', {}, {reload: true});
            });
        };

        this.save = function() {
            UserService.save(this.user).then(function(user) {
                $state.go('users.user-detailed', {userId: user._id }, {reload: true});
            });
        };

        if (this.userId) {
            UserService.getOne(this.userId).then(function(user) {
                ctx.user = user;
            });
        }
    }]
});

