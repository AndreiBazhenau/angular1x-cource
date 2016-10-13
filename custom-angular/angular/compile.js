function Compile() {
    this.$compileHtml = function(element, scope, directives, services, injector) {
        compileNode(element, scope, directives, services, injector);
    };

    function compileNode(element, scope, directives, services, injector) {
        for (var directiveIndex = 0; directiveIndex < directives.length; directiveIndex++) {
            var directive = directives[directiveIndex];
            if (element.hasAttribute(directive.name)) {
                var directive = injector.$inject(directive.directive, services);

                var attr = {};
                for (var attrIndex = 0; attrIndex < element.attributes.length; attrIndex++) {
                    var elementAttribute = element.attributes[attrIndex];
                    attr[elementAttribute.name] = elementAttribute.value;
                }

                directive.compile(scope, element, attr);
            }
        }

        var children = element.children;
        if (children.length != 0) {
            for (var index = 0; index < children.length; index++) {
                compileNode(children[index], scope, directives, services, injector);
            }
        }
    }
}
