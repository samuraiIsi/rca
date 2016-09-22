(function() {
    'use strict';

    angular.module('navigation.controller', []);

    function NavigationController($scope, $location, NavigationService, $window) {
    	var vm = this;
        vm.model = {};

        $scope.collapseIn = "";
        $scope.heightHeaderMain = false;

        NavigationService.all()
		.success(function(data){
			$scope.navElements = data;
		});

        vm.toTop = function() {
            $window.scrollTo(0, -100);
        }

        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'inicio';
            return page === currentRoute ? 'activo' : '';
        };

        $scope.convertBtnMenu = function(datanav) {
            $scope.btnMenuClass = (datanav.btnMenuClass === "change") ? "" : "change"; 
        };

        $scope.dropDownTopMenu = function() {
            $scope.collapseIn = ($scope.collapseIn === "in") ? "" : "in";
            $scope.heightHeaderMain = !($scope.heightHeaderMain);
        };

    }
    angular
        .module('navigation.controller')
        .controller('NavigationController', NavigationController);
})();