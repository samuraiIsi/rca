(function() {
    'use strict';

    angular.module('navigation.controller', []);

    function NavigationController($scope, $location, NavigationService, $window) {
    	var vm = this;
        vm.model = {};

        NavigationService.all()
		.success(function(data){
			$scope.navElements = data;
		});

        vm.toTop = function() {
            $window.scrollTo(0, -100);
        }

        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'activo' : '';
        };
    }

    angular
        .module('navigation.controller')
        .controller('NavigationController', NavigationController);
})();