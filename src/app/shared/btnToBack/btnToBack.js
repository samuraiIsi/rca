(function() {
    'use strict';

    angular.module('shared.btnToBack', ['btnToBack.controller']);

    function btnToBack($window) {
        return {
            controller: 'BtnToBackController',
            controllerAs: 'btnToBack',
            replace: true,
            restrict: 'E,A',
            transclude : true,
            templateUrl: 'src/app/shared/btnToBack/btnToBack.view.html',
            link: function (scope, elem, attrs) {
                elem.bind("click", function () {
                    $window.history.back();
                    scope.btnToBackActive = 'unblock';
                });
            }
        };
    }

    angular
        .module('shared.btnToBack')
        .directive('btnToBack', btnToBack);
})();