(function() {
    'use strict';

    angular.module('textOnly.controller', []);

    function TextOnlyController($scope) {
        $scope.bodytext = "";
        $scope.colclass = "";
        $scope.spantext = "";
        $scope.titletext = "";
        $scope.titletextclass= "";
    }
    angular
        .module('textOnly.controller')
        .controller('TextOnlyController', TextOnlyController);
})();