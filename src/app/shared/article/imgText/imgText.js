(function() {
    'use strict';

    angular.module('shared.imgText', ['imgText.controller']);

    function imgText() {
        return {
            controller: 'ImgTextController',
            controllerAs: 'imgText',
            replace: true,
            restrict: 'E',
            templateUrl: 'src/app/shared/article/imgText/imgText.view.html',
            scope: {
                bottomtext: "@",
                colclass: "@",
                header: "@",
                imgalt: "@",
                imgheight: "@",
                imgpath: "@",
                imgshape: "@",
                imgwidth: "@"
            }
        };
    }

    angular
        .module('shared.imgText')
        .directive('imgText', imgText);
})();