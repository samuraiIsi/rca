(function() {
    'use strict';

    angular.module('smoothScroll.controller', []);

    function SmoothScrollController($scope, $http, $location, anchorSmoothScroll) {
    	$scope.gotoElement = function (eID) {
            anchorSmoothScroll.scrollTo(eID);
        };
    }

    angular
        .module('smoothScroll.controller')
        .controller('SmoothScrollController', SmoothScrollController);
})();