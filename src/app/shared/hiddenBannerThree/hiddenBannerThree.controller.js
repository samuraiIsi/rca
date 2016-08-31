(function() {
    'use strict';

    angular.module('hiddenBannerThree.controller', []);

    function HiddenBannerThreeController($scope) {
    	$scope.header = "hiddenBannerThree Tooggle hecho con markdown";
		$scope.subheader = "Our templates are updated regularly so they don't break.";
		$scope.icon = "glyphicon glyphicon-book";
		$scope.body = "fff";
    }

    angular
        .module('hiddenBannerThree.controller')
        .controller('HiddenBannerThreeController', HiddenBannerThreeController);
})();