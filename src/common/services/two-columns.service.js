(function() {
    'use strict';

    angular.module('twoColumnsServ.service', []);

    function TwoColumnsService($http, APP_CONFIG) {
        var as = {};

        as.twoColumnService = function() {
            var url =APP_CONFIG.DATA_URL + 'two-columns.json';
            return $http.get(url);
        };

        as.template1 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template1.json';
            return $http.get(url);
        };

        as.template2 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template2.json';
            return $http.get(url);
        };

        as.template3 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template3.json';
            return $http.get(url);
        };

        as.template4 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template4.json';
            return $http.get(url);
        };

        as.template5 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template5.json';
            return $http.get(url);
        };

        as.template6 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template6.json';
            return $http.get(url);
        };

        as.template7 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template7.json';
            return $http.get(url);
        };

        as.template8 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template8.json';
            return $http.get(url);
        };
        return as;

    }
    angular
        .module('twoColumnsServ.service')
        .service('TwoColumnsService', TwoColumnsService);
})();