var ngHide = function() {
    return {
        compile: function($scope, $element, $attr) {
            $scope.$watch($attr.nghide, function (value) {
                if (value) {
                    $element.className += " angular-hidden";
                } else {
                    $element.className = $element.className.replace( /(?:^|\s)angular-hidden(?!\S)/g , '' );
                }
            });
        }
    };
};