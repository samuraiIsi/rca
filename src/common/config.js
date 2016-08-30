(function () {
    'use strict';

    angular.module('app.config', []);

    var APP_CONFIG = {};

    /****** Environment Variables ******/
    var defaultLocalServer = 'local';
    
    APP_CONFIG.PROTOCOL = location.protocol + '//';
    APP_CONFIG.HOSTNAME = location.hostname;
    APP_CONFIG.HOSTNAME_NO_WWW = APP_CONFIG.HOSTNAME.replace('www', '');
    APP_CONFIG.PORT = APP_CONFIG.HOSTNAME.indexOf('localhost') > -1 ? ':8075' : '';

    // http://api.ta2.totesport.com, http://api.totesport.com
    APP_CONFIG.API_URL = [APP_CONFIG.PROTOCOL, APP_CONFIG.HOSTNAME_NO_WWW, APP_CONFIG.PORT].join('').replace('ta2', defaultLocalServer);

    APP_CONFIG.API_DATA = APP_CONFIG.API_URL + '/data/';

    // e.g. http://local.totesport.com
    APP_CONFIG.CONTENT_BASE_URL = [APP_CONFIG.PROTOCOL, APP_CONFIG.HOSTNAME, APP_CONFIG.PORT].join('');

    // e.g. http://api.ta2.totesport.com/api
    // APP_CONFIG.MIDDLEWARE_URL = APP_CONFIG.API_URL + '/api';
    // === '../../../data/'
    APP_CONFIG.DATA_URL = APP_CONFIG.API_DATA;


    
    angular
        .module('app.config')
        .constant('APP_CONFIG', APP_CONFIG);
})();