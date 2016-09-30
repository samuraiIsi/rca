(function () {
    'use strict';
    HomeController.$inject = ["HomeService"];
    angular.module('home.controller', []);

    function HomeController(HomeService) {
		var vm = this;
		vm.model = {};

        HomeService.all()
		.success(function(data){
			vm.model.element = data;
		});
    }

    
    angular
        .module('home.controller')
        .controller('HomeController', HomeController);
})();