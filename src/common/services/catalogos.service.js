(function() {
    'use strict';

    angular.module('catalogosServ.service', []);

    function CatalogosService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: 'data/catalogos.json'});
            }
        };
    }

    angular
        .module('catalogosServ.service')
        .service('CatalogosService', CatalogosService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG