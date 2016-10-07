(function() {
    'use strict';

    angular.module('templatePromoPage.controller', []);

    function TemplatePromoPageController($scope) {
        var vm = this;
        vm.model = {};

        $scope.bigImg = function() {
		   $scope.heightImgsrc = 'heightImg';
		};

		$scope.showCoords = function($event) {
			var x = $event.pageX;
		    var y = $event.pageY;
		    var coor = "X coords: " + x + ", Y coords: " + y;
		    $scope.demo = coor;
		    $scope.Xcoor = x;
		    $scope.Ycoor = y;
		};

		$scope.clearCoor = function() {

		};

    }
    angular
        .module('templatePromoPage.controller')
        .controller('TemplatePromoPageController', TemplatePromoPageController);
})();
