angular.module('mailApp')
    .component('mailDetailed', {
        bindings: {
            item: '<',
            onGoBack: "&",
            onDelete: "&"
        },
        template: `
            <div>
                <button ng-click="$ctrl.goBack()">Go back</button><button ng-click="$ctrl.delete()">Delete</button>
            </div>
            <div>
                <span>To:</span><span>{{$ctrl.item.to}}</span>
            </div>
            <div>    
                <span>Subject:</span><span>{{$ctrl.item.subject}}</span>
            </div>
            <div>    
                <span>Body:</span><span>{{$ctrl.item.body}}</span>
            </div>`, 
        controller: function() {
            this.goBack = function() {
                this.onGoBack();
            };

            this.delete = function() {
                this.onDelete({ selectedItem: this.item });
            };
        }
    });