(function() {
    'use strict';

    angular.module('navigation.controller', ['navigationServ.service']);

    function NavigationController($scope, $location, NavigationService, $window, $anchorScroll) {
    	var vm = this;
        vm.model = {};

        $scope.collapseIn = "";

        NavigationService.all()
		.success(function(data){
			$scope.navElements = data;
		});

        vm.toTop = function() {
            $window.scrollTo(0, -100);
        }
        
        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'inicio' ;
            if($location.path().search("servicios") === 1) {
                currentRoute = "servicios";
            }
            return page === currentRoute ? 'activo' : '';
        };

        $scope.convertBtnMenu = function(datanav) {
            $scope.btnMenuClass = (datanav.btnMenuClass === "change") ? "" : "change";
        };

        $scope.convertBtnSubMenu = function(datanav) {
            $scope.btnSubMenuClass = (datanav.btnSubMenuClass === "change") ? "" : "change";  
        };

        $scope.dropDownTopMenu = function() {
            $scope.collapseIn = ($scope.collapseIn === "in") ? "in out" : "in";
            $scope.heightHeaderMain = ($scope.heightHeaderMain === "heightHeaderDynamic") ? "heightHeaderDynamic-disable" : "heightHeaderDynamic";
        };

        $scope.dropDownSubMenuProducts = function() {
            $scope.collapseSubIn = ($scope.collapseSubIn === "in") ? "in out" : "in";
            $scope.heightSubMenu = !($scope.heightSubMenu);
        };

    }
    angular
        .module('navigation.controller')
        .controller('NavigationController', NavigationController);
})();