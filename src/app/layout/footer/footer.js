(function() {
    'use strict';

    angular.module('footer', ['footer.controller']);

    function footer() {
        return {
            controller: 'FooterController',
            controllerAs: 'footer',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/layout/footer/footer.view.html'
        };
    }

    angular
        .module('footer')
        .directive('footerSection', footer);
})();