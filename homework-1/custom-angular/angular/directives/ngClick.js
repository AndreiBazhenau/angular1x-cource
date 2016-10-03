var ngClick =function() {
    return {
        compile: function($scope, $element, $attr) {
            var fn = $scope[$attr.ngclick];
            $element.addEventListener("click", function() {
                fn();
                $scope.$digest();
            })
        }
    };
};