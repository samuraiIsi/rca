(function() {
    'use strict';

    angular.module('camelCase.filter', []);

    function camelCaseFilter() {
        return function(input) {
            if (!angular.isString(input)) {
                return input;
            }
            return input.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
    }

    angular
        .module('camelCase.filter')
        .filter('camelCaseFilter', camelCaseFilter);
})();
