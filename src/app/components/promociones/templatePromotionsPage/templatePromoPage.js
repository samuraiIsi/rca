(function() {
    'use strict';

    angular.module('components.templatePromoPage', ['templatePromoPage.controller']);

    function templatePromoPage() {
        return {
            controller: 'TemplatePromoPageController',
            controllerAs: 'templatePromoPage',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/promociones/templatePromotionsPage/templatePromoPage.view.html',
            scope: {}
        };
    }

    angular
        .module('components.templatePromoPage')
        .directive('templatePromoPage', templatePromoPage);
})();
