(function () {
    'use strict';

    angular.module('template2.controller', []);

    function Template2Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.template2()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('template2.controller')
        .controller('Template2Controller', Template2Controller);
})();