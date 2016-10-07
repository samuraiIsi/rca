(function() {
    'use strict';

    angular.module('promotionServ.service', []);

    function PromotionService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: '../../../data/promotion.json'});
            }
        };
    }

    angular
        .module('promotionServ.service')
        .service('PromotionService', PromotionService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG