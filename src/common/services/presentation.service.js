(function() {
    'use strict';

    angular.module('presentationServ.service', []);

    function PresentationLgService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: '../../../data/presentationLg.json'});
            }
        };
    }

    function PresentationXlgService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: '../../../data/presentationXlg.json'});
            }
        };
    }

    angular
        .module('presentationServ.service')
        .service('PresentationLgService', PresentationLgService)
        .service('PresentationXlgService', PresentationXlgService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG