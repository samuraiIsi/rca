angular.module('app')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('servicios', {
		url: '/servicios',
		templateUrl: 'src/app/components/two-columns/two-columns.view.html',
		controller: 'TwoColumnsController',
		controllerAs: 'twoColumns'
	})
	.state('servicios.carteleria', {
		url: '/carteleria',
		templateUrl: 'src/app/components/two-columns/template/template1/template1.view.html',
		controller: 'Template1Controller',
        controllerAs: 'template1'
	})
	.state('servicios.servicios', {
		url: '/servicios',
		templateUrl: 'src/app/components/two-columns/template/template2/template2.view.html',
		//parent: two-columns,
		controller: 'Template2Controller',
        controllerAs: 'template2'
	})
	.state('servicios.regalos', {
		url: '/regalos',
		templateUrl: 'src/app/components/two-columns/template/template3/template3.view.html',
		//parent: two-columns,
		controller: 'Template3Controller',
        controllerAs: 'template3'
	})
	.state('servicios.llaveros', {
		url: '/llaveros',
		templateUrl: 'src/app/components/two-columns/template/template4/template4.view.html',
		controller: 'Template4Controller',
        controllerAs: 'template4'
	})
	.state('servicios.boligrafos', {
		url: '/boligrafos',
		templateUrl: 'src/app/components/two-columns/template/template5/template5.view.html',
		//parent: two-columns,
		controller: 'Template5Controller',
        controllerAs: 'template5'
	})
	.state('servicios.pegatinas', {
		url: '/pegatinas',
		templateUrl: 'src/app/components/two-columns/template/template6/template6.view.html',
		//parent: two-columns,
		controller: 'Template6Controller',
        controllerAs: 'template6'
	})
	.state('servicios.camisetas', {
		url: '/camisetas',
		templateUrl: 'src/app/components/two-columns/template/template7/template7.view.html',
		controller: 'Template7Controller',
        controllerAs: 'template7'
	})
	.state('servicios.otros', {
		url: '/otros',
		templateUrl: 'src/app/components/two-columns/template/template8/template8.view.html',
		//parent: two-columns,
		controller: 'Template8Controller',
        controllerAs: 'template8'
	})
	.state('inicio', {
		url: '/',
		templateUrl: 'src/app/components/home/home.view.html',
		controller: 'HomeController',
		controllerAs: 'home'
	})
	.state('promociones', {
		url: '/promociones',
		templateUrl: 'src/app/components/promociones/promociones.view.html',
		controller: 'PromocionesController',
		controllerAs: 'promociones'
	})
	.state('proveedores', {
		url: '/proveedores',
		templateUrl: 'src/app/components/proveedores/proveedores.view.html',
		controller: 'ProveedoresController',
		controllerAs: 'proveedores'
	})
	.state('contacto', {
		url: '/contacto',
		templateUrl: 'src/app/components/contact/contact.view.html',
		controller: 'ContactController',
		controllerAs: 'contact'
	});
}]);