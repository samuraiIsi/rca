(function() {
    'use strict';

    angular.module('templatePromoPage.controller', []);

    function TemplatePromoPageController($scope, PromotionService) {
        var vm = this;
        vm.model = {};

        PromotionService.promotionDivPageService()
            .success(function(data) {
                vm.model.element = data;

                var currentDay = new Date();
                var expirationDate = Date.parse(data.dateExpiration);
                var currentDayMs = currentDay.getTime();
                if (expirationDate > currentDayMs) {
                    vm.model.verdad = true;;
                }
            });

        vm.model.priceText = "Precio: ";

    }
    angular
        .module('templatePromoPage.controller')
        .controller('TemplatePromoPageController', TemplatePromoPageController);
})();
