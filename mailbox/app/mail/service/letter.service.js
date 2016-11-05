angular.module('mail.module').factory('LetterService', ['$resource', 'REST_URL', function ($resource, REST_URL) {
    return $resource(REST_URL + '/letters/:id',{
        id: '@_id',
    });
}]);
