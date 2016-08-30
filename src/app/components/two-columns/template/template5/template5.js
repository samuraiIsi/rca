(function() {
    'use strict';

    angular.module('components.template5', ['template5.controller']);

    function template5() {
        return {
            controller: 'Template5Controller',
            controllerAs: 'template5',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template5/template5.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template5')
        .directive('template5', template5);
})();