(function() {
    'use strict';

    angular.module('components.template2', ['template2.controller']);

    function template2() {
        return {
            controller: 'Template2Controller',
            controllerAs: 'template2',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template2/template2.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template2')
        .directive('template2', template2);
})();