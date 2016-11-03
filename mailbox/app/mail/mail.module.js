angular.module('mail.module', ['ui.router', 'ngResource']);

angular.module('mail.module').config(['$stateProvider', function($stateProvider) {

    $stateProvider.state('mailboxes', {
        url: '/mailboxes',
        template: '<mails-page></mails-page>'
    });

    $stateProvider.state('mail-create', {
        url: '/mail-create',
        template: '<mail-create-page></mail-create-page>'
    });

    $stateProvider.state('mailboxes.mail-table', {
        url: '/:mailboxId',
        template: '<mail-table mailbox-id="mailboxId"></mail-table>',
        controller: ['$scope', '$stateParams', function($scope, $stateParams) {
            $scope.mailboxId = $stateParams.mailboxId;
        }]
    });

    $stateProvider.state('mailboxes.mail-item-detailed', {
        url: '/:mailboxId/mail/:letterId',
        template: '<mail-detailed mailbox-id="mailboxId" letter-id="letterId"></mail-detailed>',
        controller: ['$scope', '$stateParams', function($scope, $stateParams) {
            $scope.mailboxId = $stateParams.mailboxId;
            $scope.letterId = $stateParams.letterId;
        }]
    });
}]);


