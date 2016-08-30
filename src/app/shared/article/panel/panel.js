(function() {
    'use strict';

    angular.module('shared.panel', ['panel.controller']);

    function panel() {
        return {
            controller: 'PanelController',
            controllerAs: 'panel',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/article/panel/panel.view.html',
            scope: {
                header: "@",
                body: "@",
                bodystyle: "@",
                colclass: "@",
                footer: "@",
                footerstyle: "@",
                imgalt: "@",
                imgheight: "@",
                imgpath: "@",
                imgshape: "@",
                imgwidth: "@",
                panelstyle: "@"
            }
        };
    }

    angular
        .module('shared.panel')
        .directive('panel', panel);
})();