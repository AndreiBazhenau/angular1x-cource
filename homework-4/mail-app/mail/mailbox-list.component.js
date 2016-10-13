angular.module('mail.module').component('mailboxList',  {
    template: `
        <div ng-repeat = "mailbox in $ctrl.mailboxes" style="float: left;">
            <div>
                <a ui-sref="mailboxes.mail-table({mailboxId: mailbox._id})">{{mailbox.title}}</a>
            </div>
        </div>
        <div style="float:left; padding-left: 30px;">
            <ui-view></ui-view>
        </div>
    `,
    controller: ['MailboxService', function(MailboxService){
        var ctx = this;
        MailboxService.query(function(mailboxes) {
            ctx.mailboxes = mailboxes;
        });
    }]
});
