(function () {
    'use strict';

    angular.module('template4.controller', []);

<<<<<<< HEAD
    function Template4Controller($scope, TwoColumnsService) {
		var vm = this;
		vm.model = {};
        var i;
        var suma = 0;
=======
    function Template4Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};
>>>>>>> 106f5cd24faeaa05ad5f3b1700c0cb2b50585b46

		TwoColumnsService.template4()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('template4.controller')
        .controller('Template4Controller', Template4Controller);
})();