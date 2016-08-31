(function () {
    'use strict';

    angular.module('contact.controller', []);

    function ContactController($scope, $window) {
		var vm = this;
		vm.model = {};

        // function init() {
            var myCenter = new google.maps.LatLng(37.35515, -6.144626,21);

            // var myAddress =   '<h1>RCA</h1>'+
            //                   '<p>P.I PIBO. C/. Aznalcázar, 5</p>'+
            //                   '<p>Naves Monteguadiana Mód. 35 y 36</p>'+
            //                   '<p>41110 - Bollullos de la Mitación (Sevilla)</p>';

            var mapOptions = {
                zoom: 15,
                center: myCenter,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                draggable: true
            };

            // var infowindow = new google.maps.InfoWindow({
            //     content: myAddress
            // });


            $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

            var marker = new google.maps.Marker({
                position: myCenter,
                title: 'RCA Publicidad'
            });

            marker.setMap($scope.map);
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function(){ marker.setAnimation(null); }, 2500);
            //infowindow.open($scope.map, marker);
    }
    angular
        .module('contact.controller')
        .controller('ContactController', ContactController);
})();