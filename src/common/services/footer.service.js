(function() {
    'use strict';

    angular.module('footerServ.service', []);

    function FooterService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: 'data/footer.json'});
            }
        };
    }

    angular
        .module('footerServ.service')
        .service('FooterService', FooterService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG