(function() {
    'use strict';

    angular.module('components.template3', ['template3.controller']);

    function template3() {
        return {
            controller: 'Template3Controller',
            controllerAs: 'template3',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template3/template3.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template3')
        .directive('template3', template3);
})();