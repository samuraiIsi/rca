(function() {
    'use strict';

    angular.module('imgOverlay.controller', []);

    function ImgOverlayController() {
        var vm = this;
        vm.model = {};
    }

    angular
        .module('imgOverlay.controller')
        .controller('ImgOverlayController', ImgOverlayController);
})();