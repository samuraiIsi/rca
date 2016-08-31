(function() {
    'use strict';

    angular.module('shared.detectViewPort', ['detectViewPort.controller']);

    function detectViewPort() {
        return {
            controller: 'DetectViewPortController',
            controllerAs: 'detectViewPort',
            replace: true,
            restrict: 'A'
        };
    }

    angular
        .module('shared.detectViewPort')
        .directive('detectViewPort', detectViewPort);
})();