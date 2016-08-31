(function() {
	angular
		.module('app', [
			'app.config',
			
			'ui.router',
			'ui.bootstrap',

			'footer',
			'header',

			'common.components',
			'common.shared',
			'common.factories',
			'common.services'
		]);
})();