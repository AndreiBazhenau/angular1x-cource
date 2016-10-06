angular.module('mailApp')
    .component('mailTableItem', {
        bindings: {
            item: '<'
        },
        template: `
            <div style="border-bottom: 1px solid black; width: 800px">
                <span style="width: 100px">{{$ctrl.item.from}}</span>
                <span>
                    <span>{{$ctrl.item.subject}} - </span>
                    <span>{{$ctrl.item.body | limitTo : (100 - $ctrl.item.subject.length) : 0}}</span>
                </span>
            </div>`
    });
