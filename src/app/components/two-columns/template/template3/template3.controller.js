(function () {
    'use strict';

    angular.module('template3.controller', []);

    function Template3Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.template3()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('template3.controller')
        .controller('Template3Controller', Template3Controller);
})();