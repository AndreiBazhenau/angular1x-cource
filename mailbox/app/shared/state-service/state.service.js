angular.module('shared.module').service('StateService', function() {

    var loginRedirectState;
    var previousState;

    this.setLoginRedirectState = function(state, params) {
        loginRedirectState = { state: state, params: params };
    };

    this.getLoginRedirectState = function() {
        return loginRedirectState;
    };

    this.setPreviousState = function(state, params) {
        previousState = { state: state, params: params };
    };

    this.getPreviousState = function() {
        return previousState;
    };

});
