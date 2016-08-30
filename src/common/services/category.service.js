(function() {
    'use strict';

    angular.module('categoryServ.service', []);

    function CategoryService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: '../../../data/category.json'});
            }
        };
    }

    angular
        .module('categoryServ.service')
        .service('CategoryService', CategoryService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG