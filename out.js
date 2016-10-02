(function() {
    'use strict';

    BtnToTopController.$inject = ["$window"];
    angular.module('btnToTop.controller', []);

    function BtnToTopController($window) {
        var vm = this;
        vm.model = {};
    	vm.model.scrollTop = function() {
            $window.scrollTo(0, -100);
        };
    }

    angular
        .module('btnToTop.controller')
        .controller('BtnToTopController', BtnToTopController);
})();