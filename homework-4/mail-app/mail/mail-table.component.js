angular.module('mail.module').component('mailTable', {
        bindings: {
            mailboxId: '<',
        },
        template: `
            <div>
                <div ng-repeat="letter in $ctrl.letters" 
                    ui-sref="mailboxes.mail-item-detailed({mailboxId: $ctrl.mailboxId, letterId: letter._id})">
                    <mail-table-item item="letter">                        
                    </mail-table-item>
                </div>
            </div>`,
        controller: ['LetterService', function(LetterService){
            var ctx = this;
            LetterService.query(function(letters) {
                ctx.letters = letters.filter(function(letter) {
                    return letter.mailbox === ctx.mailboxId;
                });
            });
        }]
    });