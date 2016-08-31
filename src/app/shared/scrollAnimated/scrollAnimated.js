(function() {
    'use strict';

    angular.module('shared.scrollAnimated', ['scrollAnimated.controller']);

    function scrollAnimated() {
        return {
            controller: 'ScrollAnimatedController',
            controllerAs: 'scrollAnimated',
            replace: true,
            restrict: 'A'
        };
    }

    angular
        .module('shared.scrollAnimated')
        .directive('scrollAnimated', scrollAnimated);
})();