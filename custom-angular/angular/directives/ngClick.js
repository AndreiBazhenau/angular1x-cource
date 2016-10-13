var ngClick =function() {
    return {
        restrict: 'A',
        compile: function($scope, $element, $attr) {
            var fn = $scope[$attr.ngclick];
            $element.addEventListener("click", function() {
                fn();
                $scope.$digest();
            })
        }
    };
};