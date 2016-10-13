var ngShow = function() {
    return {
        restrict: 'A',
        compile: function($scope, $element, $attr) {
            $scope.$watch($attr.ngshow, function (value) {
                if (value) {
                    $element.className = $element.className.replace( /(?:^|\s)angular-hidden(?!\S)/g , '' );
                } else {
                    $element.className += " angular-hidden";
                }
            });
        }
    };
};
