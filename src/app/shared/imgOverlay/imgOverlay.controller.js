(function() {
    'use strict';

    angular.module('imgOverlay.controller', []);

    function ImgOverlayController($scope, $window) {
        var vm = this;
        vm.model = {};

        vm.toTop = function() {
            $window.scrollTo(0, -100);
        }
    }

    angular
        .module('imgOverlay.controller')
        .controller('ImgOverlayController', ImgOverlayController);
})();