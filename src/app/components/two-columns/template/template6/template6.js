(function() {
    'use strict';

    angular.module('components.template6', ['template6.controller']);

    function template6() {
        return {
            controller: 'Template6Controller',
            controllerAs: 'template6',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template6/template6.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template6')
        .directive('template6', template6);
})();