angular.module('mail.module').component('mailTable', {
        bindings: {
            mailboxId: '<',
        },
        templateUrl: 'app/mail/mails-page/mail-table/mail-table.component.html',
        controller: ['LetterService', function(LetterService){
            var ctx = this;
            LetterService.query(function(letters) {
                ctx.letters = letters.filter(function(letter) {
                    return letter.mailbox === ctx.mailboxId;
                });
            });
        }]
    });