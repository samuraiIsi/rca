(function() {
    'use strict';

    angular.module('shared.imagesThreeCol', ['imagesThreeCol.controller']);

    function imagesThreeCol() {
        return {
            controller: 'ImagesThreeColController',
            controllerAs: 'imagesThreeCol',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/imagesThreeCol/imagesThreeCol.view.html',
            scope: {
                enlace: "@",
                image: "@",
                category: "@",
                portName: "@"
            }
        };
    }

    angular
        .module('shared.imagesThreeCol')
        .directive('imagesThreeCol', imagesThreeCol);
})();