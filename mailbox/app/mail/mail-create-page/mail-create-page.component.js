angular.module('mail.module').component('mailCreatePage', {
    templateUrl: 'mail/mail-create-page/mail-create-page.component.html' ,
    controller: ['MailboxService', 'LetterService', '$state', function(MailboxService, LetterService, $state) {
        var ctx = this;

        this.cancel = function() {
            // TODO : implement me
        };

        this.save = function() {
            saveMessageToMailbox('draft', this.message);
        };

        this.send = function () {
            saveMessageToMailbox('outbox', this.message);
        };
        
        function saveMessageToMailbox(mailboxTitle, message) {
            getMailboxByTitle(mailboxTitle).then(function(mailbox) {
                message.mailbox = mailbox._id;
                LetterService.save(message, function() {
                    $state.go('mailboxes');
                });
            });
        }
        
        function getMailboxByTitle(title) {
            var deferred = $q.defer();
            
            MailboxService.query().then(function(mailboxes) {
                var mailbox = mailboxes.filter(function(mailbox) {
                    return mailbox.title === title;
                });

                deferred.resolve(mailbox);
            });

            return deferred.promise;
        }
    }]
});
