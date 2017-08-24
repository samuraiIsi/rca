(function() {
    'use strict';

    angular.module('shared.photoGalleryHover', ['photoGalleryHover.controller']);

    function photoGalleryHover() {
        return {
            controller: 'PhotoGalleryHoverController',
            controllerAs: 'photoGalleryHover',
            restrict: 'E',
            templateUrl: 'src/app/shared/photoGallery/photoGalleryHover/photoGalleryHover.view.html',
            scope: {
                gallerydata: "="
            }
        };
    }

    angular
        .module('shared.photoGalleryHover')
        .directive('photoGalleryHover', photoGalleryHover);
})();