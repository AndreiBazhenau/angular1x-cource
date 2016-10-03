angular.module('mailApp')
    .directive('mailTable', function(){
        return {
            restrict: 'E',
            scope: {
                items: '=',
                showDetailedHandler: "&"
            },
            template: `
                <div>
                    <div ng-repeat="item in items">
                        <mail-table-item data-item="item" ng-click="selectItem(item)"></mail-table-item>
                    </div>
                </div>`,
            link: function($scope) {
                $scope.selectItem = function(item) {
                    $scope.showDetailedHandler({ selectedItem: item });
                }
            }
        };
    });