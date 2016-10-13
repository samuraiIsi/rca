(function() {
	angular
		.module('app', [
			'app.config',
			
			'ui.router',
			'ui.bootstrap',
			'angularUtils.directives.dirPagination',

			'footer',
			'header',

			'common.components',
			'common.shared',
			'common.factories',
			'common.filters',
			'common.services'
		]);
})();