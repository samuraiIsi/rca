(function() {
    'use strict';

    angular.module('components.contact', ['contact.controller']);

    function contact() {
        return {
            controller: 'ContactController',
            controllerAs: 'contact',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/contact/contact.view.html',
            scope: {}
        };
    }

    angular
        .module('components.contact')
        .directive('contact', contact);
})();