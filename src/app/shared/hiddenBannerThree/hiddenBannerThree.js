(function() {
    'use strict';

    angular.module('shared.hiddenBannerThree', ['hiddenBannerThree.controller']);

    function hiddenBannerThree($sce) {
        return {
            controller: 'HiddenBannerThreeController',
            controllerAs: 'hiddenBannerThree',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/hiddenBannerThree/hiddenBannerThree.view.html',
            scope: {
                header: "@",
                subheader: "@",
                icon: "@",
                body: "@"
            },
            link: function(scope, element, attrs) {
                scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body));
                element.on("click", function() {
                    angular.element("div.card p").toggleClass("hidden");
                });
            }
        };
    }

    angular
        .module('shared.hiddenBannerThree')
        .directive('hiddenBannerThree', hiddenBannerThree);
})();