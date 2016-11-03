angular.module('shared.module').component('httpAjaxLoadIndicator',  {
    templateUrl: 'shared/http-ajax-load-indicator/http-ajax-load-indicator.component.html',
    controller: ['$scope', function($scope){
        var ctx = this;
        this.showLoadIndicator = false;

        $scope.$on("loader_show", function () {
            ctx.showLoadIndicator = true;
        });

        $scope.$on("loader_hide", function () {
            ctx.showLoadIndicator = false;
        });
    }]
});

