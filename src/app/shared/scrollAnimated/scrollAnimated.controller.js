(function() {
    'use strict';

    angular.module('scrollAnimated.controller', []);

    function ScrollAnimatedController($scope, $window) {
    	var vm = this;
        vm.model = {};

        angular.element($window).bind("scroll", function(){
            if(vm.model.isBelowPageFold() || 'fadeInUp' === $scope.buttonAnimation) {
                if($scope.buttonAnimation = vm.model.isBelowPageFold()){
                    $scope.buttonAnimation = 'fadeInUp';
                    $scope.logoAnimation = 'navbar-header small logo';
                    $scope.navigationBgAnimation = 'upper underlay';   
                    $scope.navigationAnimation = 'movedown navbar';
                }else{
                    $scope.buttonAnimation = 'fadeOutDown';
                    $scope.logoAnimation = 'big logo';
                    $scope.navigationBgAnimation = 'down underlay';
                    $scope.navigationAnimation = 'navbar';
                }
            }
            $scope.$apply();
        });

        vm.model.isBelowPageFold = function() {
            return ($window.scrollY || $window.pageYOffset) > $window.screen.height / 12; //6
        };
    }

    angular
        .module('scrollAnimated.controller')
        .controller('ScrollAnimatedController', ScrollAnimatedController);
})();