describe('Test StateService', function() {

    beforeEach(module('ui.router'));
    beforeEach(module('shared.module'));

    var StateService;
    beforeEach(inject(function(_StateService_) {
        StateService = _StateService_;
    }));

    it('Track login redirect state: setLoginRedirectState/getLoginRedirectState', function() {
        var state = "state1";
        var params = "params1";
        StateService.setLoginRedirectState(state, params);

        var stateContainer = StateService.getLoginRedirectState();
        expect(stateContainer.state).toBe(state);
        expect(stateContainer.params).toBe(params);
    });

    it('Track previous state: setPreviousState/getPreviousState', function() {
        var state = "state1";
        var params = "params1";
        StateService.setPreviousState(state, params);

        var stateContainer = StateService.getPreviousState();
        expect(stateContainer.state).toBe(state);
        expect(stateContainer.params).toBe(params);
    });
});
