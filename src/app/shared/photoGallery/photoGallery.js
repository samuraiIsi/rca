(function() {
    'use strict';

    angular.module('shared.photoGallery', ['photoGallery.controller']);

    function photoGallery() {
        return {
            controller: 'PhotoGalleryController',
            controllerAs: 'photoGallery',
            restrict: 'E',
            templateUrl: '/src/app/shared/photoGallery/photoGallery.view.html',
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
        .module('shared.photoGallery')
        .directive('photoGallery', photoGallery);
})();