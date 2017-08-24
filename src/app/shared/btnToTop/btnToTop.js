(function() {
    'use strict';

    angular.module('shared.btnToTop', ['btnToTop.controller']);

    function btnToTop() {
        return {
            controller: 'BtnToTopController',
            controllerAs: 'btnToTop',
            replace: true,
            restrict: 'E',
            templateUrl: 'src/app/shared/btnToTop/btnToTop.view.html'
        };
    }

    angular
        .module('shared.btnToTop')
        .directive('btnToTop', btnToTop);
})();
