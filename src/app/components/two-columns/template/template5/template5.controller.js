(function () {
    'use strict';

    angular.module('template5.controller', []);

    function Template5Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.template5()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('template5.controller')
        .controller('Template5Controller', Template5Controller);
})();