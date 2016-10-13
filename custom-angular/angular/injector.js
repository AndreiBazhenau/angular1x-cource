function Injector() {

    this.$inject = function(functionToInject, services) {
        var paramNames = getParamNames(functionToInject);
        var servicesToInject = [];
        for (var paramNameIndex = 0; paramNameIndex < paramNames.length; paramNameIndex++) {
            var paramName = paramNames[paramNameIndex];
            var service = getServiceInstanceByName(services, paramName);
            servicesToInject.push(service);
        }

        return functionToInject.apply(null, servicesToInject);
    }

    function getServiceInstanceByName(services, name) {
        for (var serviceIndex = 0; serviceIndex < services.length; serviceIndex++) {
            var service = services[serviceIndex];
            if (service.name === name) {
                return service.instance;
            }
        }

        return null;
    }
    
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var ARGUMENT_NAMES = /([^\s,]+)/g;
    
    function getParamNames(func) {
        var fnStr = func.toString().replace(STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        if(result === null)
            result = [];
        return result;
    }
    
}