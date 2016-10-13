(function() {
    'use strict';

    angular.module('smoothScroll.controller', []);

    function SmoothScrollController($scope, AnchorSmoothScroll) {
        $scope.gotoElement = function(eID) {
            AnchorSmoothScroll.scrollTo(eID);
        };
    }

    angular
        .module('smoothScroll.controller')
        .controller('SmoothScrollController', SmoothScrollController);
})();
