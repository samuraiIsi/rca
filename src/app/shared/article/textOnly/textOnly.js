(function() {
    'use strict';

    angular.module('shared.textOnly', ['textOnly.controller']);

    function textOnly() {
        return {
            controller: 'TextOnlyController',
            controllerAs: 'textOnly',
            replace: true,
            restrict: 'E',
            templateUrl: 'src/app/shared/article/textOnly/textOnly.view.html',
            scope: {
                bodytext: "@",
                colclass: "@",
                spantext: "@",
                titletext: "@",
                titletextclass: "@"
            }
        };
    }

    angular
        .module('shared.textOnly')
        .directive('textOnly', textOnly);
})();