(function() {
    'use strict';

    angular.module('iconText.controller', []);

    function IconTextController($scope) {
    	$scope.header = "Toggle hecho con markdown";
        $scope.subheader = "Our templates are updated regularly so they don't breaks.";
        $scope.icon = "glyphicon glyphicon-book";
    }

    angular
        .module('iconText.controller')
        .controller('IconTextController', IconTextController);
})();