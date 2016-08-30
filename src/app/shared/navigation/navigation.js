(function() {
    'use strict';

    angular.module('shared.navigation', ['navigation.controller']);

    function navigation() {
        return {
            controller: 'NavigationController',
            controllerAs: 'navigation',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/navigation/navigation.view.html'
        };
    }

    angular
        .module('shared.navigation')
        .directive('navigation', navigation);
})();