(function() {
    'use strict';

    angular.module('shared.iconText', ['iconText.controller']);

    function iconText() {
        return {
            controller: 'IconTextController',
            controllerAs: 'iconText',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/article/iconText/iconText.view.html',
            scope: {
                header: "@",
                subheader: "@",
                icon: "@",
                revealernumber: "@"
            }
        };
    }

    angular
        .module('shared.iconText')
        .directive('iconText', iconText);
})();