var customDirective = function(customService) {
    return {
        restrict: 'A',
        compile: function($scope, $element, $attr) {
            $scope.visibleNgShow = true;
            $scope.visibleNgIf = true;
            $scope.visibleNgHideInner = false;
            $scope.visibleNgIfInner = true;
            $scope.bindValue = "initial bind value";
            $scope.valueFromService = customService.getValue();

            $scope.visibleNgShowClickHandler = function () {
                $scope.visibleNgShow = !$scope.visibleNgShow;
            };
            $scope.visibleNgIfClickHandler = function () {
                $scope.visibleNgIf = !$scope.visibleNgIf;
            };
            $scope.visibleNgHideInnerClickHandler = function () {
                $scope.visibleNgHideInner = !$scope.visibleNgHideInner;
            };
            $scope.visibleNgIfInnerClickHandler = function () {
                $scope.visibleNgIfInner = !$scope.visibleNgIfInner;
            };
            $scope.changeBindValueClickHandler = function() {
                $scope.bindValue = "changed bind value";
            }
        }
    };
};