angular.module('user.module').component('userItemDetailed',  {
    bindings: {
        userId: "<"
    },
    template: `
        <div>
            <button type="button" ng-click="$ctrl.goBack()">Go back</button>
            <button type="button" ng-click="$ctrl.delete()">Delete</button>
            <div>
                <h3>{{$ctrl.user.fullName}}</h3>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr><td>Дата рождения</td><td>{{$ctrl.user.birthdate | date : shortDate}}</td></tr>
                        <tr><td>Пол</td><td>{{$ctrl.user.gender}}</td></tr>
                        <tr><td>Адрес</td><td>{{$ctrl.user.address}}</td></tr>
                        <tr><td>Email</td><td>{{$ctrl.user.email}}</td></tr>
                    </tbody>
                </table>                
            </div>
        </div>
    `,
    controller: ['UserService', '$state', function(UserService, $state){
        var ctx = this;

        this.goBack = function() {
            $state.go('users');
        };

        this.delete = function() {
            UserService.delete(this.user).then(function() {
                $state.go('users');
            });
        };

        UserService.getOne(this.userId).then(function(user) {
            ctx.user = user;
        });
    }]
});
