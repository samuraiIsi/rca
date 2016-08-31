(function() {
    'use strict';

    angular.module('navigation.controller', []);

    function NavigationController($scope, NavigationService, $window) {
    	var vm = this;
        vm.model = {};

        NavigationService.all()
		.success(function(data){
			$scope.navElements = data;
		});

        vm.toTop = function() {
            $window.scrollTo(0, -100);
        }
    }

    angular
        .module('navigation.controller')
        .controller('NavigationController', NavigationController);
})();