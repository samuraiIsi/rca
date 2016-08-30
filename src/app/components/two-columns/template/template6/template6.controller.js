(function () {
    'use strict';

    angular.module('template6.controller', []);

    function Template6Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.template6()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('template6.controller')
        .controller('Template6Controller', Template6Controller);
})();