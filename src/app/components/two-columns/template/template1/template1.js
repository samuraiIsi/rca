(function() {
    'use strict';

    angular.module('components.template1', ['template1.controller']);

    function template1() {
        return {
            controller: 'Template1Controller',
            controllerAs: 'template1',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template1/template1.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template1')
        .directive('template1', template1);
})();