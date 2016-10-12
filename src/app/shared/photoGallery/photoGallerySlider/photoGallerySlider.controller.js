(function() {
    'use strict';

    angular.module('photoGallerySlider.controller', []);

    function PhotoGallerySliderController($scope) {
        var IMAGE_WIDTH = 405;
        $scope.buttonText = "Ver Mas";

        // $scope.init = function(e, ind) {
        //     $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
        //     $scope.selected = e;
        // };
        
        $scope.scrollTo = function(info, ind) {
            $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
            $scope.selected = info;
        };


        $scope.arrowSlides = function(numAb) {
            $scope.listposition = {left:(IMAGE_WIDTH * ind * numAb) + "px"};
        };
    }
    angular
        .module('photoGallerySlider.controller')
        .controller('PhotoGallerySliderController', PhotoGallerySliderController);
})();