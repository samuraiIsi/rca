(function() {
    'use strict';

    angular.module('components.promociones', ['promociones.controller']);

    function promociones() {
        return {
            controller: 'PromocionesController',
            controllerAs: 'promociones',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/promociones/promociones.view.html',
            scope: {}
        };
    }

    angular
        .module('components.promociones')
        .directive('promociones', promociones);
})();
