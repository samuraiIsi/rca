(function() {
    'use strict';

    angular.module('shared.presentationLg', ['presentationLg.controller']);

    function presentationLg() {
        return {
            controller: 'PresentationLgController',
            controllerAs: 'presentationLg',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/presentation/presentationLg/presentationLg.view.html',
            scope: {
                header: "@",
                subheader: "@"
            }
        };
    }

    angular
        .module('shared.presentationLg')
        .directive('presentationLg', presentationLg);
})();