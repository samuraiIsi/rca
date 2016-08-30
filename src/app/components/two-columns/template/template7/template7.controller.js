(function () {
    'use strict';

    angular.module('template7.controller', []);

    function Template7Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.template7()
		.success(function(data){
			vm.model.element = data;
            vm.model.selecting = data[0];
		});
    }
    
    angular
        .module('template7.controller')
        .controller('Template7Controller', Template7Controller);
})();