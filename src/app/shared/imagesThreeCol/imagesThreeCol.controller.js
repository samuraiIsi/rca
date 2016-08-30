(function() {
    'use strict';

    angular.module('imagesThreeCol.controller', []);

    function ImagesThreeColController($scope) {
    	var vm = this;
        vm.model = {};
        
        $scope.enlace = "http://www.betfred.com";
        $scope.image = "images/alimentos.jpg";
        $scope.category = "Titulo1";
        $scope.portaName = "Titulo2";
    }

    angular
        .module('imagesThreeCol.controller')
        .controller('ImagesThreeColController', ImagesThreeColController);
})();
// Hace el servicio tal como yo lo hago