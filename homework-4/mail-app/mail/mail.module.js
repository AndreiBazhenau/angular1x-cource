angular.module('mail.module', ['ui.router', 'ngResource']);

angular.module('mail.module').config(function($stateProvider) {

    $stateProvider.state('mailboxes', {
        url: 'mailboxes',
        template: `<mailbox-list></mailbox-list>`
    });

    $stateProvider.state('mailboxes.mail-table', {
        url: '/:mailboxId',
        template: `<mail-table mailbox-id="mailboxId"></mail-table>`,
        controller: function($scope, $stateParams) {
            $scope.mailboxId = $stateParams.mailboxId;
        }
    });

    $stateProvider.state('mailboxes.mail-item-detailed', {
        url: '/:mailboxId/mail/:letterId',
        template: `<mail-detailed mailbox-id="mailboxId" letter-id="letterId"></mail-detailed>`,
        controller: function($scope, $stateParams) {
            $scope.mailboxId = $stateParams.mailboxId;
            $scope.letterId = $stateParams.letterId;
        }
    });
});


