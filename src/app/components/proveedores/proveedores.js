(function() {
    'use strict';

    angular.module('components.proveedores', ['proveedores.controller']);

    function proveedores() {
        return {
            controller: 'ProveedoresController',
            controllerAs: 'proveedores',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/proveedores/proveedores.view.html',
            scope: {}
        };
    }

    angular
        .module('components.proveedores')
        .directive('proveedores', proveedores);
})();
