(function(window) {

    var scope = new Scope();
    var compile = new Compile();
    var registeredDirectives = [];

    function init() {
        // empty for a while
    }

    function registerDirective(name, directive) {
        registeredDirectives.push({ name: name, directive: directive});
    }

    function setValueToScope(name, value) {
        scope[name] = value;
    }

    function bootstrap(initScope, element) {
        initScope(scope);
        compile.$compileHtml(element, scope, registeredDirectives);
        scope.$digest();
    }

    window.angular = {
        init: init,
        setValueToScope: setValueToScope,
        registerDirective: registerDirective,
        bootstrap: bootstrap
    };

})(window);
