(function() {
    'use strict';

    angular.module('shared.smoothScroll', ['smoothScroll.controller']);

    function smoothScroll() {
        return {
            controller: 'SmoothScrollController',
            controllerAs: 'smoothScroll',
            replace: true,
            restrict: 'A'
        };
    }

    angular
        .module('shared.smoothScroll')
        .directive('smoothScroll', smoothScroll);
})();