angular.module('mailApp')
    .component('mailTable', {
        bindings: {
            items: '<',
            onShowDetailed: "&"
        },
        template: `
            <div>
                <div ng-repeat="item in $ctrl.items">
                    <mail-table-item item="item" ng-click="$ctrl.selectItem(item)"></mail-table-item>
                </div>
            </div>`,
        controller: function() {
            this.selectItem = function(item) {
                this.onShowDetailed({ selectedItem: item });
            }
        }
    });