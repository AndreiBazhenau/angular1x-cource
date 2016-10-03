var ngBind = function() {
    return {
        compile: function ($scope, $element, $attr) {
            $scope.$watch($attr.ngbind, function (value) {
                $element.textContent = value;
            });
        }
    };
};
