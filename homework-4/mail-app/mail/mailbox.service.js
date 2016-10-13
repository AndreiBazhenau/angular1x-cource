angular.module('mail.module').factory('MailboxService', ['$resource', function ($resource) {
    return $resource('http://test-api.javascript.ru/v1/abazhenau/mailboxes/:id',{
        id: '@_id',
    });
}]);
