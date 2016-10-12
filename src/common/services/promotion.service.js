(function() {
    'use strict';

    angular.module('promotionServ.service', []);

    function PromotionService($http, APP_CONFIG) {
        var as = {};

        as.promotionService = function() {
            var url =APP_CONFIG.DATA_URL + 'promotion.json';
            return $http.get(url);
        };

        as.promotionDivPageService = function() {
            var url =APP_CONFIG.DATA_URL + 'promoindivpage.json';
            return $http.get(url);
        };

        return as;
    }

    angular
        .module('promotionServ.service')
        .service('PromotionService', PromotionService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG