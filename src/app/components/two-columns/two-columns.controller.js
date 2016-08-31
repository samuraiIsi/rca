(function () {
    'use strict';

    angular.module('twoColumns.controller', []);

    function TwoColumnsController(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.twoColumnService()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('twoColumns.controller')
        .controller('TwoColumnsController', TwoColumnsController);
})();