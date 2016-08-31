angular.module('app')
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('inicio', {
		url: '/home',
		templateUrl: 'src/app/components/home/home.view.html',
		controller: 'HomeController',
		controllerAs: 'home'
	})
	.state('two-columns', {
		url: '/two-columns',
		templateUrl: 'src/app/components/two-columns/two-columns.view.html',
		controller: 'TwoColumnsController',
		controllerAs: 'twoColumns'
	})
	.state('two-columns.template1', {
		url: '/template1',
		templateUrl: 'src/app/components/two-columns/template/template1/template1.view.html',
		controller: 'Template1Controller',
        controllerAs: 'template1'
	})
	.state('two-columns.template2', {
		url: '/template2',
		templateUrl: 'src/app/components/two-columns/template/template2/template2.view.html',
		//parent: two-columns,
		controller: 'Template2Controller',
        controllerAs: 'template2'
	})
	.state('two-columns.template3', {
		url: '/template3',
		templateUrl: 'src/app/components/two-columns/template/template3/template3.view.html',
		//parent: two-columns,
		controller: 'Template3Controller',
        controllerAs: 'template3'
	})
	.state('two-columns.template4', {
		url: '/two-columns/template4',
		templateUrl: 'src/app/components/two-columns/template/template4/template4.view.html',
		controller: 'Template4Controller',
        controllerAs: 'template4'
	})
	.state('two-columns.template5', {
		url: '/two-columns/template5',
		templateUrl: 'src/app/components/two-columns/template/template5/template5.view.html',
		//parent: two-columns,
		controller: 'Template5Controller',
        controllerAs: 'template5'
	})
	.state('two-columns.template6', {
		url: '/two-columns/template6',
		templateUrl: 'src/app/components/two-columns/template/template6/template6.view.html',
		//parent: two-columns,
		controller: 'Template6Controller',
        controllerAs: 'template6'
	})
	.state('two-columns.template7', {
		url: '/two-columns/template7',
		templateUrl: 'src/app/components/two-columns/template/template7/template7.view.html',
		controller: 'Template7Controller',
        controllerAs: 'template7'
	})
	.state('two-columns.template8', {
		url: '/two-columns/template8',
		templateUrl: 'src/app/components/two-columns/template/template8/template8.view.html',
		//parent: two-columns,
		controller: 'Template8Controller',
        controllerAs: 'template8'
	})
	.state('home', {
		url: '/',
		templateUrl: 'src/app/components/home/home.view.html',
		controller: 'HomeController',
		controllerAs: 'home'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'src/app/components/contact/contact.view.html',
		controller: 'ContactController',
		controllerAs: 'contact'
	});
});
// .run(['$state', function ($state) {
//    $state.transitionTo('home'); 
// }]);