(function() {
    'use strict';

    angular.module('components.twoColumns', ['twoColumns.controller']);

    function twoColumns() {
        return {
            controller: 'TwoColumnsController',
            controllerAs: 'twoColumns',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/twoColumns/twoColumns.view.html',
            scope: {},
            require: '^CarouselController'
        }
    }

    angular
        .module('components.twoColumns')
        .directive('twoColumns', twoColumns);
})();