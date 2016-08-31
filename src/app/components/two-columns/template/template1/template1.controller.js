(function () {
    'use strict';

    angular.module('template1.controller', []);

    function Template1Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.template1()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('template1.controller')
        .controller('Template1Controller', Template1Controller);
})();