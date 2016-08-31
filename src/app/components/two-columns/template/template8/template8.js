(function() {
    'use strict';

    angular.module('components.template8', ['template8.controller']);

    function template8() {
        return {
            controller: 'Template3Controller',
            controllerAs: 'template8',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template8/template8.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template8')
        .directive('template8', template8);
})();