angular.module('mailApp')
    .directive('mailDetailed', function(){
        return {
            restrict: 'E',
            scope: {
                item: '=',
                goBackHandler: "&"
            },
            template: `
                <div>
                    <button ng-click="goBack()">Go back</button>
                </div>
                <div>
                    <span>From:</span><span>{{item.from}}</span>
                </div>
                <div>    
                    <span>Subject:</span><span>{{item.subject}}</span>
                </div>
                <div>    
                    <span>Body:</span><span>{{item.body}}</span>
                </div>`,
            link: function($scope) {
                $scope.goBack = function() {
                    $scope.goBackHandler();
                }
            }
        };
    });