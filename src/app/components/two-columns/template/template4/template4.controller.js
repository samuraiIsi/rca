(function () {
    'use strict';

    angular.module('template4.controller', []);

    function Template4Controller($scope, TwoColumnsService) {
		var vm = this;
		vm.model = {};
        var i;
        var suma = 0;

		TwoColumnsService.template4()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('template4.controller')
        .controller('Template4Controller', Template4Controller);
})();