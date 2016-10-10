angular.module('mailApp').factory('LetterService', ['$resource', function ($resource) {
    return $resource('http://test-api.javascript.ru/v1/abazhenau/letters/:id',{
        id: '@_id',
    });
}]);