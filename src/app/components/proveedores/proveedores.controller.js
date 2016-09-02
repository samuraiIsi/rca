(function () {
    'use strict';

    angular.module('proveedores.controller', []);

    function ProveedoresController() {
		var vm = this;
		vm.model = {};

    }
    angular
        .module('proveedores.controller')
        .controller('ProveedoresController', ProveedoresController);
})();