(function() {
    'use strict';

    angular.module('shared.separatorSections', []);

    function separatorSections() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/separator/separator.view.html'
        };
    }

    angular
        .module('shared.separatorSections')
        .directive('separatorSections', separatorSections);
})();