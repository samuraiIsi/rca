(function() {
    'use strict';

    angular.module('components.template4', ['template4.controller']);

    function template4() {
        return {
            controller: 'Template4Controller',
            controllerAs: 'template4',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template4/template4.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template4')
        .directive('template4', template4);
})();