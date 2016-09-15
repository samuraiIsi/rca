(function () {
    'use strict';

    angular.module('template7.controller', []);

    function Template7Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.template7()
		.success(function(data){
			vm.model.element = data;
            vm.model.selecting1 = data.gallery1[0];
            vm.model.selecting2 = data.gallery2[0];
            vm.model.selecting3 = data.gallery3[0];
		});
    }
    
    angular
        .module('template7.controller')
        .controller('Template7Controller', Template7Controller);
})();