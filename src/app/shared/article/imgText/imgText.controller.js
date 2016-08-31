(function() {
    'use strict';

    angular.module('imgText.controller', []);

    function ImgTextController($scope) {
    	$scope.bottomtext = "";
        $scope.header = "";
        $scope.imgalt = "";
        $scope.imgheight = "236";
        $scope.imgpath = "src/theme/assets/img/cities/cinqueterre.jpg";
        $scope.imgshape = "img-circle";
        $scope.imgwidth = "304";
        $scope.colclass = "col-xs-2";
    }

    angular
        .module('imgText.controller')
        .controller('ImgTextController', ImgTextController);
})();