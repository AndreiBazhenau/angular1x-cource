angular.module('mailApp')
    .directive('mailTableItem', function(){
        return {
            restrict: 'E',
            scope: {
                item: '='
            },
            template: `
                <div style="border-bottom: 1px solid black; width: 800px;">
                    <span style="width: 100px">{{item.from}}</span>
                    <span>
                        <span>{{item.subject}} - </span>
                        <span>{{item.body | limitTo : (100 - item.subject.length) : 0}}</span>
                    </span>
                </div>`
        };
    });
