angular.module('mail.module').component('mailDetailed', {
        bindings: {
            letterId: '<',
            mailboxId: '<'
        },
        templateUrl: 'mail/mails-page/mail-detailed/mail-detailed.component.html' ,
        controller: ['LetterService', '$state', function(LetterService, $state) {
            var ctx = this;
            LetterService.get({ id : this.letterId}, function(letter) {
                ctx.letter = letter;
            });

            this.goBack = function() {
                $state.go('mailboxes.mail-table', { mailboxId: ctx.mailboxId });
            };

            this.delete = function() {
                ctx.letter.$delete(function() {
                    $state.go('mailboxes.mail-table', { mailboxId: ctx.mailboxId });
                });
            };
        }]
    });