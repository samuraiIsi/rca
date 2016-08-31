(function() {
    'use strict';

    angular.module('shared.carousel', ['carousel.controller']);

    function carousel() {
        return {
            controller: 'CarouselController',
            controllerAs: 'carousel',
            replace: true,
            restrict: 'E',
            require: '^NwCategoryItemController',
            templateUrl: '/src/app/shared/carousel/carousel.view.html',
            scope: {
                slidedata: "="
            }
        };
    }

    angular
        .module('shared.carousel')
        .directive('carousel', carousel);
})();