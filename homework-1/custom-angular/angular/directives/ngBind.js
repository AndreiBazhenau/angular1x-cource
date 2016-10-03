var ngBind = function() {
    return {
        compile: function ($scope, $element, $attr) {
            $scope.$watch($attr.ngBind, function (value) {
                $element.textContent = value;
            });
        }
    };
};
