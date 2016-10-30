angular.module('user.module').component('userList',  {
    templateUrl: 'app/user/users-page/user-list/user-list.component.html',
    controller: ['Restangular', function(Restangular){
        var ctx = this;
        Restangular.all('users').getList().then(function(users) {
            ctx.users = users;
        });
    }]
});
