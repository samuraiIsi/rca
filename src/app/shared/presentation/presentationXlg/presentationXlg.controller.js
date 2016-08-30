(function() {
    'use strict';

    angular.module('presentationXlg.controller', []);

    function PresentationXlgController($scope) {
    	$scope.header = "YOU FAVORITE SOURCE OF FREE BOOTSTRAP THEMES";
        $scope.subheader = "Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!";
        $scope.ctatext = "Mira lo Ultimo";
        $scope.btnclass = "btn btn-danger oval text-uppercase";
    }

    angular
        .module('presentationXlg.controller')
        .controller('PresentationXlgController', PresentationXlgController);
})();
// Hace el servicio tal como yo lo hago