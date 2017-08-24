(function() {
    'use strict';

    angular.module('shared.logo', []);

    function logo() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'src/app/shared/logo/logo.view.html'
        };
    }

    angular
        .module('shared.logo')
        .directive('logo', logo);
})();