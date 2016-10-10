(function(window) {

    var scope = new Scope();
    var compile = new Compile();
    var injector = new Injector();
    var directives = [];
    var services = [];

    function init() {
        // empty for a while
    }

    function directive(name, directive) {
        directives.push({ name: name, directive: directive});
    }

    function component(name, component) {
        var directiveDefinition = {
            restict: 'E',
            controller: component.controller
        };
        if (component.template) {
            directiveDefinition.template = component.template
        }

        directive(name, directiveDefinition);
    }

    function service(name, service) {
        services.push({ name: name, constructor: service, instance: null});
    }

    function bootstrap(element) {
        initServices();
        compile.$compileHtml(element, scope, directives, services, injector);
        scope.$digest();
    }

    function initServices() {
        // TODO : build dependency graph.
        for (var serviceIndex = 0; serviceIndex < services.length; serviceIndex++) {
            var service = services[serviceIndex];
            service.instance = new service.constructor();
        }
    }

    window.angular = {
        init: init,
        directive: directive,
        component: component,
        service: service,
        bootstrap: bootstrap
    };

})(window);
