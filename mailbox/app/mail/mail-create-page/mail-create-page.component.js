angular.module('mail.module').component('mailCreatePage', {
    templateUrl: 'mail/mail-create-page/mail-create-page.component.html' ,
    controller: ['MailboxService', 'LetterService', 'StateService', '$state', '$q',
        function(MailboxService, LetterService, StateService, $state, $q) {
        var ctx = this;

        this.cancel = function() {
            var previousState = StateService.getPreviousState();
            $state.go(previousState.state, previousState.params);
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
                    var previousState = StateService.getPreviousState();
                    $state.go(previousState.state, previousState.params);
                });
            });
        }
        
        function getMailboxByTitle(title) {
            var deferred = $q.defer();
            
            MailboxService.query(function(mailboxes) {
                var mailbox = mailboxes.filter(function(mailbox) {
                    return mailbox.title === title;
                });

                deferred.resolve(mailbox[0]);
            });

            return deferred.promise;
        }
    }]
});
