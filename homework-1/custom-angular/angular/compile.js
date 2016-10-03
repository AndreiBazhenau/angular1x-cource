function Compile() {
    this.$compileHtml = function(element, scope, registeredDirectives) {
        compileNode(element, scope, registeredDirectives);
    };

    function compileNode(element, scope, registeredDirectives) {
        for (var directiveIndex = 0; directiveIndex < registeredDirectives.length; directiveIndex++) {
            var directive = registeredDirectives[directiveIndex];
            if (element.hasAttribute(directive.name)) {
                var directive = new directive.directive();

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
                compileNode(children[index], scope, registeredDirectives);
            }
        }
    }
}
