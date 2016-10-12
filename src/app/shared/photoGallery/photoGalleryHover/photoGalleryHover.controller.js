(function() {
    'use strict';

    angular.module('photoGalleryHover.controller', []);

    function PhotoGalleryHoverController($scope) {
        var vm = this;
        vm.model = {};

        $scope.hoverImgSide = function() {
            $scope.hoverimgSide = "hoverimgSideActive";
        };

         $scope.clearhoverImgSide = function() {
            $scope.hoverimgSide = "hoverimgSideblock";
        };

        $scope.init = function(img) {
            $scope.imgmain = img;
        }

        $scope.changeImg = function(x) {
            $scope.imgmain = x.img;
        }

        $scope.showCoords = function($event) {
            var x = $event.pageX;
            var y = $event.pageY;
            var coor = "X coords: " + x + ", Y coords: " + y;
            $scope.demo = coor;
            $scope.Xcoorimg = x - (x/2) + "px";
            $scope.Ycoorimg = y - 200 + "px";
            // if (x <= 20) {
            //     $scope.XcoorSq = 10;
            //     $scope.YcoorSq = y - 70 + "px";
            // } else if (x >= 550) {
            //     $scope.XcoorSq = 600 + "px";
            //     $scope.YcoorSq = y - 70 + "px";
            //     $scope.Xcoorimg = 550 + "px";
            // } else if (y >= 600) {
            //     $scope.YcoorSq = 600 + "px";
            //     $scope.XcoorSq = x + 50 + "px";
            // } else {
            //     $scope.XcoorSq = x - 50 + "px";
            //     $scope.YcoorSq = y - 100 + "px";
            // }
        };
    }
    angular
        .module('photoGalleryHover.controller')
        .controller('PhotoGalleryHoverController', PhotoGalleryHoverController);
})();
