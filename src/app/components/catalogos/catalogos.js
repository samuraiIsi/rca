(function() {
    'use strict';

    angular.module('components.catalogos', ['catalogos.controller']);

    function catalogos() {
        return {
            controller: 'CatalogosController',
            controllerAs: 'catalogos',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/catalogos/catalogos.view.html',
            scope: {}
        };
    }

    angular
        .module('components.catalogos')
        .directive('catalogos', catalogos);
})();