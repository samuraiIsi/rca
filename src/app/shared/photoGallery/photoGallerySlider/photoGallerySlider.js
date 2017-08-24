(function() {
    'use strict';

    angular.module('shared.photoGallerySlider', ['photoGallerySlider.controller']);

    function photoGallerySlider() {
        return {
            controller: 'PhotoGallerySliderController',
            controllerAs: 'photoGallerySlider',
            restrict: 'E',
            templateUrl: 'src/app/shared/photoGallery/photoGallerySlider/photoGallerySlider.view.html',
            scope: {
                gallerydata: "=",
                descriptiondata: "=",
                selected: "=",
                side: "="
                // desc: "="
            }
        };
    }

    angular
        .module('shared.photoGallerySlider')
        .directive('photoGallerySlider', photoGallerySlider);
})();