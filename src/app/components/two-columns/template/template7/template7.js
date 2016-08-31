(function() {
    'use strict';

    angular.module('components.template7', ['template7.controller']);

    function template7() {
        return {
            controller: 'Template7Controller',
            controllerAs: 'template7',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template7/template7.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template7')
        .directive('template7', template7);
})();