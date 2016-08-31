(function() {
    'use strict';

    angular.module('components.home', ['home.controller']);

    function home() {
        return {
            controller: 'HomeController',
            controllerAs: 'home',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/home/home.view.html',
            scope: {}
        };
    }

    angular
        .module('components.home')
        .directive('home', home);
})();