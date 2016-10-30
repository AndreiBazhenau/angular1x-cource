angular.module('home.module', ['ui.router']);

angular.module('home.module').config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        template: `<home-page></home-page>`
    });
});


