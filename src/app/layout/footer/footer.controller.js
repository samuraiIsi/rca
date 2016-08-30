(function() {
    'use strict';

    angular.module('footer.controller', []);

    function FooterController($scope, FooterService) {
    	FooterService.all()
		.success(function(data){
			$scope.element = data;
		});
    }

    angular
        .module('footer.controller')
        .controller('FooterController', FooterController);
})();