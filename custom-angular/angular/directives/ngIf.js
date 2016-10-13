var ngIf = function() {
    return {
        restrict: 'A',
        compile: function($scope, $element, $attr) {
            var parentElement = $element.parentNode;
            var previousElement = null;
            var previousValue = null;
            $scope.$watch($attr.ngif, function (value) {
                if (previousValue === value) {
                    return;
                }

                previousValue = value;

                if (value) {
                    if (null !== previousElement) {
                        parentElement.insertBefore($element, previousElement);
                        parentElement.removeChild(previousElement);
                        previousElement = null;
                    }

                } else {
                    var commentElement = document.createComment("ng-if=\"false\"");
                    parentElement.insertBefore(commentElement, $element);
                    parentElement.removeChild($element);
                    previousElement = commentElement;
                }
            });
        }
    };
};