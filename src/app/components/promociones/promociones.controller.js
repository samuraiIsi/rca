(function() {
    'use strict';

    angular.module('promociones.controller', []);

    function PromocionesController(PromotionService) {
        var vm = this;
        vm.model = {};

        PromotionService.promotionService()
		.success(function(data){
			vm.model.element = data;
		});

    }
    angular
        .module('promociones.controller')
        .controller('PromocionesController', PromocionesController);
})();
