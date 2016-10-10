var ngBind = function() {
    return {
        restrict: 'A',
        compile: function ($scope, $element, $attr) {
            $scope.$watch($attr.ngbind, function (value) {
                $element.textContent = value;
            });
        }
    };
};
