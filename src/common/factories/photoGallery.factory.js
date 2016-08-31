(function() {
    'use strict';

    angular.module('photoGallery.factory', []);

    function PhotoGalleryFactory($http) {
        return {
           get: function(fileName,callback){
                $http.get(fileName).
                success(function(data, status) {
                    callback(data);
                });
           }
       };
    }

    angular
        .module('photoGallery.factory')
        .factory('PhotoGalleryFactory', PhotoGalleryFactory);
})();