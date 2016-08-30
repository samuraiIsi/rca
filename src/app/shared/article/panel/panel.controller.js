(function() {
    'use strict';

    angular.module('panel.controller', []);

    function PanelController($scope) {
        $scope.header = "";
        $scope.body = "Our templates are updated regularly so they don't breaks.";
        $scope.bodystyle = "";
        $scope.colclass = "col-lg-3 col-xs-1";
        $scope.footer = "";
        $scope.footerstyle = "";
        $scope.imgalt = "Cinque Terre";
        $scope.imgheight = "236";
        $scope.imgpath = "";
        $scope.imgshape = "img-circle";
        $scope.imgwidth = "304";
        $scope.panelstyle = "panel-warning";
    }
    angular
        .module('panel.controller')
        .controller('PanelController', PanelController);
})();