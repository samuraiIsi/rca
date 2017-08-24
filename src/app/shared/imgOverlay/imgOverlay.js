(function() {
    'use strict';

    angular.module('shared.imgOverlay', ['imgOverlay.controller']);

    function imgOverlay() {
        return {
            controller: 'ImgOverlayController',
            controllerAs: 'imgOverlay',
            replace: true,
            restrict: 'E',
            templateUrl: 'src/app/shared/imgOverlay/imgOverlay.view.html',
            scope: {
                colsimgoverlay: "@",
                imgimgoverlay: "@",
                titleimgoverlay: "@",
                textimgoverlay: "@",
                linkbtn1: "@",
                color1imgoverlay: "@",
                text1btnimgoverlay: "@",
                linkbtn2: "@",
                color2imgoverlay: "@",
                text2btnimgoverlay: "@",
                classwellpanel: "@",
                titlebanner: "@"
            }
        };
    }

    angular
        .module('shared.imgOverlay')
        .directive('imgOverlay', imgOverlay);
})();