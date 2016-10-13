angular.module('user.module').component('userList',  {
    template: `
        <div ng-repeat = "user in $ctrl.users">
            <div>
                <a ui-sref="user-detailed({userId:user._id})">{{user.fullName}}</h3>
            </div>
        </div>
                    `,
    controller: ['Restangular', function(Restangular){
        var ctx = this;
        Restangular.all('users').getList().then(function(users) {
            ctx.users = users;
        });
    }]
});
