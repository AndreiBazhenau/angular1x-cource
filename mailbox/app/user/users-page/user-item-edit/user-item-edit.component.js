angular.module('user.module').component('userItemEdit',  {
    bindings: {
        userId: "<"
    },
    templateUrl: 'app/user/users-page/user-item-edit/user-item-edit.component.html',
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
            // TODO : save user
            $state.go('users', {userId: userId});
        };

        if (this.userId) {
            UserService.getOne(this.userId).then(function(user) {
                ctx.user = user;
            });
        }
    }]
});

