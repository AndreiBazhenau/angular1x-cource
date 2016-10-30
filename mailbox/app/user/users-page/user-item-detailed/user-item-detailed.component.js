angular.module('user.module').component('userItemDetailed',  {
    bindings: {
        userId: "<"
    },
    templateUrl: 'user/users-page/user-item-detailed/user-item-detailed.component.html',
    controller: ['UserService', '$state', function(UserService, $state){
        var ctx = this;

        this.delete = function() {
            UserService.delete(this.user).then(function() {
                $state.go('users', {}, {reload: true});
            });
        };

        UserService.getOne(this.userId).then(function(user) {
            ctx.user = user;
        });
    }]
});
