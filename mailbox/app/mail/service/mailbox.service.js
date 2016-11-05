angular.module('mail.module').factory('MailboxService', ['$resource', 'REST_URL', function ($resource, REST_URL) {
    return $resource(REST_URL + '/mailboxes/:id',{
        id: '@_id',
    });
}]);
