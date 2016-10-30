angular.module('mail.module').component('mailboxList',  {
    templateUrl: 'mail/mails-page/mailbox-list/mailbox-list.component.html',
    controller: ['MailboxService', '$state', function(MailboxService, $state){
        var ctx = this;
        MailboxService.query(function(mailboxes) {
            ctx.mailboxes = mailboxes;
            if (mailboxes && mailboxes.length > 0) {
                $state.go('mailboxes.mail-table', { mailboxId: mailboxes[0]._id });
            }
        });
    }]
});
