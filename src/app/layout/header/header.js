(function() {
    'use strict';

    angular.module('header', ['header.controller']);

    function header() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/layout/header/header.view.html'
        };
    }

    angular
        .module('header')
        .directive('headerSection', header);
})();