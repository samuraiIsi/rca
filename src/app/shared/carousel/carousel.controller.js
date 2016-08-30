(function() {
    'use strict';

    angular.module('carousel.controller', []);

    function CarouselController($window, $scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
    }
    angular
        .module('carousel.controller')
        .controller('CarouselController', CarouselController);
})();