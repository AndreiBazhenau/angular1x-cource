angular.module('mail.module').component('mailCreatePage', {
    templateUrl: 'mail/mail-create-page/mail-create-page.component.html' ,
    controller: ['LetterService', '$state', function(LetterService, $state) {
        var ctx = this;

        this.cancel = function() {
            // TODO : implement me
        };

        this.save = function() {
            // TODO : implement me
        };

        this.send = function () {
            // TODO : implement me
        }
    }]
});
