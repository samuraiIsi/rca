(function() {
    'use strict';

    angular.module('presentationLg.controller', []);

    function PresentationLgController($scope) {
    	var vm = this;
        vm.model = {}
        
        $scope.header = "PresentationLg from PresentationLg por defecto";
        $scope.subheader = "Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!";
    }

    angular
        .module('presentationLg.controller')
        .controller('PresentationLgController', PresentationLgController);
})();
// Hace el servicio tal como yo lo hago