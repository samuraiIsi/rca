(function() {
    'use strict';

    angular.module('homeServ.service', []);

    function HomeService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: 'data/home.json'});
            }
        };
    }

    angular
        .module('homeServ.service')
        .service('HomeService', HomeService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG