(function() {
    'use strict';

    angular.module('navigationServ.service', []);

    function NavigationService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: 'data/navElems.json'});
            }
        };
    }

    angular
        .module('navigationServ.service')
        .service('NavigationService', NavigationService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG