(function() {
    'use strict';

    angular.module('promociones.controller', []);

    function PromocionesController() {
        var vm = this;
        vm.model = {};

    }
    angular
        .module('promociones.controller')
        .controller('PromocionesController', PromocionesController);
})();
