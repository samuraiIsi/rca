(function () {
    'use strict';

    angular.module('catalogos.controller', []);

    function CatalogosController(CatalogosService) {
		var vm = this;
		vm.model = {};

		CatalogosService.all()
		.success(function(data){
			vm.model.element = data;
		});

    }
    angular
        .module('catalogos.controller')
        .controller('CatalogosController', CatalogosController);
})();