angular.module('mailApp')
    .component('mailDetailed', {
        bindings: {
            item: '<',
            onGoBack: "&"
        },
        template: `
            <div>
                <button ng-click="$ctrl.goBack()">Go back</button>
            </div>
            <div>
                <span>From:</span><span>{{$ctrl.item.from}}</span>
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
            }
        }
    });