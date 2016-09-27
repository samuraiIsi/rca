(function() {
    'use strict';

    angular.module('shared.presentationXlg', ['presentationXlg.controller']);

    function presentationXlg() {
        return {
            controller: 'PresentationXlgController',
            controllerAs: 'presentationXlg',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/presentation/presentationXlg/presentationXlg.view.html',
            scope: {
                ctatext: "@",
                btnclass: "@",
                header: "@",
                subheader: "@",
                revealerclass: "@"
            }
        };
    }

    angular
        .module('shared.presentationXlg')
        .directive('presentationXlg', presentationXlg);
})();