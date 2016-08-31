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
			'common.services'
		]);
})();
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
	});
});
// .run(['$state', function ($state) {
//    $state.transitionTo('home'); 
// }]);
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
(function() {
	'use strict'

	angular
		.module('common.components', [
			'components.home',
			'components.template1',
			'components.template2',
			'components.template3',
			'components.template4',
			'components.template5',
			'components.template6',
			'components.template7',
			'components.template8',
			'components.twoColumns'
		]);
})();
(function() {
	'use strict'

	angular
		.module('common.shared', [
			'shared.btnToTop',
			'shared.carousel',
			'shared.headerBg',
			'shared.hiddenBannerThree',
			'shared.iconText',
			'shared.imagesThreeCol',
			'shared.logo',
			'shared.navigation',
			'shared.nwCategoryItem',
			'shared.nwCategorySelect',
			'shared.panel',
			'shared.presentationLg',
			'shared.presentationXlg',
			'shared.scrollAnimated',
			'shared.separatorSections'
		]);
})();
(function() {
    'use strict';

    angular.module('categoryServ.service', []);

    function CategoryService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: '../../../data/category.json'});
            }
        };
    }

    angular
        .module('categoryServ.service')
        .service('CategoryService', CategoryService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG
(function() {
    'use strict';

    angular.module('footerServ.service', []);

    function FooterService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: '../../../data/footer.json'});
            }
        };
    }

    angular
        .module('footerServ.service')
        .service('FooterService', FooterService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG
(function() {
    'use strict';

    angular.module('homeServ.service', []);

    function HomeService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: '../../../data/home.json'});
            }
        };
    }

    angular
        .module('homeServ.service')
        .service('HomeService', HomeService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG
(function() {
    'use strict';

    angular.module('navigationServ.service', []);

    function NavigationService($http) {
        return {
            all: function() {
                return $http({method: "GET", url: '../../../data/navElems.json'});
            }
        };
    }

    angular
        .module('navigationServ.service')
        .service('NavigationService', NavigationService);
})();

// Hacerlo como esta en tote, con http service, APP_CONFIG
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
(function() {
    'use strict';

    angular.module('twoColumnsServ.service', []);

    function TwoColumnsService($http, APP_CONFIG) {
        var as = {};

        as.twoColumnService = function() {
            var url =APP_CONFIG.DATA_URL + 'two-columns.json';
            return $http.get(url);
        };

        as.template1 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template1.json';
            return $http.get(url);
        };

        as.template2 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template2.json';
            return $http.get(url);
        };

        as.template3 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template3.json';
            return $http.get(url);
        };

        as.template4 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template4.json';
            return $http.get(url);
        };

        as.template5 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template5.json';
            return $http.get(url);
        };

        as.template6 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template6.json';
            return $http.get(url);
        };

        as.template7 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template7.json';
            return $http.get(url);
        };

        as.template8 = function() {
            var url =APP_CONFIG.DATA_URL + 'template/template8.json';
            return $http.get(url);
        };
        return as;

    }
    angular
        .module('twoColumnsServ.service')
        .service('TwoColumnsService', TwoColumnsService);
})();
(function() {
    'use strict';
    
    angular.module('common.services', [
    	'categoryServ.service',
        'footerServ.service',
        'homeServ.service',
        'navigationServ.service',
    	'presentationServ.service',
    	'twoColumnsServ.service'
    ]);
})();
(function () {
    'use strict';

    angular.module('home.controller', []);

    function HomeController(HomeService) {
		var vm = this;
		vm.model = {};

        HomeService.all()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('home.controller')
        .controller('HomeController', HomeController);
})();
(function() {
    'use strict';

    angular.module('components.home', ['home.controller']);

    function home() {
        return {
            controller: 'HomeController',
            controllerAs: 'home',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/home/home.view.html',
            scope: {}
        };
    }

    angular
        .module('components.home')
        .directive('home', home);
})();
(function () {
    'use strict';

    angular.module('twoColumns.controller', []);

    function TwoColumnsController(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.twoColumnService()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('twoColumns.controller')
        .controller('TwoColumnsController', TwoColumnsController);
})();
(function() {
    'use strict';

    angular.module('components.twoColumns', ['twoColumns.controller']);

    function twoColumns() {
        return {
            controller: 'TwoColumnsController',
            controllerAs: 'twoColumns',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/twoColumns/twoColumns.view.html',
            scope: {},
            require: '^CarouselController'
        }
    }

    angular
        .module('components.twoColumns')
        .directive('twoColumns', twoColumns);
})();
(function() {
    'use strict';

    angular.module('footer.controller', []);

    function FooterController($scope, FooterService) {
    	FooterService.all()
		.success(function(data){
			$scope.element = data;
		});
    }

    angular
        .module('footer.controller')
        .controller('FooterController', FooterController);
})();
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
(function() {
    'use strict';

    angular.module('header', []);

    function header() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/layout/header/header.view.html'
        };
    }

    angular
        .module('header')
        .directive('headerSection', header);
})();
(function() {
    'use strict';

    angular.module('btnToTop.controller', []);

    function BtnToTopController($window) {
        var vm = this;
        vm.model = {};
    	vm.model.scrollTop = function() {
            $window.scrollTo(0, -100);
        };
    }

    angular
        .module('btnToTop.controller')
        .controller('BtnToTopController', BtnToTopController);
})();
(function() {
    'use strict';

    angular.module('shared.btnToTop', ['btnToTop.controller']);

    function btnToTop() {
        return {
            controller: 'BtnToTopController',
            controllerAs: 'btnToTop',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/btnToTop/btnToTop.view.html'
        };
    }

    angular
        .module('shared.btnToTop')
        .directive('btnToTop', btnToTop);
})();
(function() {
    'use strict';

    angular.module('carousel.controller', []);

    function CarouselController($window, $scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
            var newWidth = 600 + slides.length;
            slides.push({
              image: '../src/theme/assets/img/carousel/' + newWidth + '.jpg',
              text: ['Nice image','Awesome photograph','That is so cool'][slides.length % 3],
              title: ['Title 1','Title 2','Title 3'][slides.length % 3],
              cta: ['template1', 'template2', 'template3'][slides.length % 3],
              id: currIndex++
            });
        };

        for (var i = 0; i < 3; i++) {
            $scope.addSlide();
        }
    }
    angular
        .module('carousel.controller')
        .controller('CarouselController', CarouselController);
})();
(function() {
    'use strict';

    angular.module('shared.carousel', ['carousel.controller']);

    function carousel() {
        return {
            controller: 'CarouselController',
            controllerAs: 'carousel',
            replace: true,
            restrict: 'E',
            require: '^NwCategoryItemController',
            templateUrl: '/src/app/shared/carousel/carousel.view.html'
        };
    }

    angular
        .module('shared.carousel')
        .directive('carousel', carousel);
})();
(function() {
    'use strict';

    angular.module('shared.headerBg', []);

    // function headerBg() {
    //     return {
    //         link: function(scope, element, attrs) {
    //             element.css("background-image","url(" + attrs.headerBg + ")")
    //         }
    //     }
    // }
    function headerBg() {
        return function(scope, element, attrs) {
            var url = attrs.headerBg;
            element.css({
                'background-image': 'url(' + attrs.headerBg +')',
                'background-size' : 'cover'
            });
        };
    }
// header-bg="{{home.model.element.headerbg}}"
    angular
        .module('shared.headerBg')
        .directive('headerBg', headerBg);
})();
(function() {
    'use strict';

    angular.module('hiddenBannerThree.controller', []);

    function HiddenBannerThreeController($scope) {
    	$scope.header = "hiddenBannerThree Tooggle hecho con markdown";
		$scope.subheader = "Our templates are updated regularly so they don't break.";
		$scope.icon = "glyphicon glyphicon-book";
		$scope.body = "fff";
    }

    angular
        .module('hiddenBannerThree.controller')
        .controller('HiddenBannerThreeController', HiddenBannerThreeController);
})();
(function() {
    'use strict';

    angular.module('shared.hiddenBannerThree', ['hiddenBannerThree.controller']);

    function hiddenBannerThree($sce) {
        return {
            controller: 'HiddenBannerThreeController',
            controllerAs: 'hiddenBannerThree',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/hiddenBannerThree/hiddenBannerThree.view.html',
            scope: {
                header: "@",
                subheader: "@",
                icon: "@",
                body: "@"
            },
            link: function(scope, element, attrs) {
                scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body));
                element.on("click", function() {
                    angular.element("div.card p").toggleClass("hidden");
                });
            }
        };
    }

    angular
        .module('shared.hiddenBannerThree')
        .directive('hiddenBannerThree', hiddenBannerThree);
})();
(function() {
    'use strict';

    angular.module('imagesThreeCol.controller', []);

    function ImagesThreeColController($scope) {
    	var vm = this;
        vm.model = {}
        
        $scope.enlace = "http://www.betfred.com";
        $scope.image = "images/alimentos.jpg";
        $scope.category = "Titulo1";
        $scope.portaName = "Titulo2";
    }

    angular
        .module('imagesThreeCol.controller')
        .controller('ImagesThreeColController', ImagesThreeColController);
})();
// Hace el servicio tal como yo lo hago
(function() {
    'use strict';

    angular.module('shared.imagesThreeCol', ['imagesThreeCol.controller']);

    function imagesThreeCol() {
        return {
            controller: 'ImagesThreeColController',
            controllerAs: 'imagesThreeCol',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/imagesThreeCol/imagesThreeCol.view.html',
            scope: {
                enlace: "@",
                image: "@",
                category: "@",
                portName: "@"
            }
        };
    }

    angular
        .module('shared.imagesThreeCol')
        .directive('imagesThreeCol', imagesThreeCol);
})();
(function() {
    'use strict';

    angular.module('shared.logo', []);

    function logo() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/logo/logo.view.html'
        };
    }

    angular
        .module('shared.logo')
        .directive('logo', logo);
})();
(function() {
    'use strict';

    angular.module('navigation.controller', []);

    function NavigationController($scope, NavigationService) {
    	NavigationService.all()
		.success(function(data){
			$scope.navElements = data;
		});
    }

    angular
        .module('navigation.controller')
        .controller('NavigationController', NavigationController);
})();
(function() {
    'use strict';

    angular.module('shared.navigation', ['navigation.controller']);

    function navigation() {
        return {
            controller: 'NavigationController',
            controllerAs: 'navigation',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/navigation/navigation.view.html'
        };
    }

    angular
        .module('shared.navigation')
        .directive('navigation', navigation);
})();
(function() {
    'use strict';

    angular.module('scrollAnimated.controller', []);

    function ScrollAnimatedController($scope, $window) {
    	var vm = this;
        vm.model = {};

        angular.element($window).bind("scroll", function(){
            if(vm.model.isBelowPageFold() || 'fadeInUp' === $scope.buttonAnimation) {
                if($scope.buttonAnimation = vm.model.isBelowPageFold()){
                    $scope.buttonAnimation = 'fadeInUp';
                    $scope.logoAnimation = 'navbar-header small logo';
                    $scope.navigationBgAnimation = 'upper underlay';   
                    $scope.navigationAnimation = 'movedown navbar';
                }else{
                    $scope.buttonAnimation = 'fadeOutDown';
                    $scope.logoAnimation = 'big logo';
                    $scope.navigationBgAnimation = 'down underlay';
                    $scope.navigationAnimation = 'navbar';
                }
            }
            $scope.$apply();
        });

        vm.model.isBelowPageFold = function() {
            return ($window.scrollY || $window.pageYOffset) > $window.screen.height / 6;
        };
    }

    angular
        .module('scrollAnimated.controller')
        .controller('ScrollAnimatedController', ScrollAnimatedController);
})();
(function() {
    'use strict';

    angular.module('shared.scrollAnimated', ['scrollAnimated.controller']);

    function scrollAnimated() {
        return {
            controller: 'ScrollAnimatedController',
            controllerAs: 'scrollAnimated',
            replace: true,
            restrict: 'A'
        };
    }

    angular
        .module('shared.scrollAnimated')
        .directive('scrollAnimated', scrollAnimated);
})();
(function() {
    'use strict';

    angular.module('shared.separatorSections', []);

    function separatorSections() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/separator/separator.view.html'
        };
    }

    angular
        .module('shared.separatorSections')
        .directive('separatorSections', separatorSections);
})();
(function() {
    'use strict';

    angular.module('iconText.controller', []);

    function IconTextController($scope) {
    	$scope.header = "Toggle hecho con markdown";
        $scope.subheader = "Our templates are updated regularly so they don't breaks.";
        $scope.icon = "glyphicon glyphicon-book";
    }

    angular
        .module('iconText.controller')
        .controller('IconTextController', IconTextController);
})();
(function() {
    'use strict';

    angular.module('shared.iconText', ['iconText.controller']);

    function iconText() {
        return {
            controller: 'IconTextController',
            controllerAs: 'iconText',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/article/iconText/iconText.view.html',
            scope: {
                header: "@",
                subheader: "@",
                icon: "@"
            }
        };
    }

    angular
        .module('shared.iconText')
        .directive('iconText', iconText);
})();
(function() {
    'use strict';

    angular.module('panel.controller', []);

    function PanelController($window, $scope) {
        $scope.header = "Toggle hecho con markdown";
        $scope.body = "Our templates are updated regularly so they don't breaks.";
        $scope.columns = "col-lg-3 col-xs-1";
        $scope.panelStyle = "panel-primary";
    }
    angular
        .module('panel.controller')
        .controller('PanelController', PanelController);
})();
(function() {
    'use strict';

    angular.module('shared.panel', ['panel.controller']);

    function panel() {
        return {
            controller: 'PanelController',
            controllerAs: 'panel',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/article/panel/panel.view.html',
            scope: {
                header: "@",
                body: "@",
                columns: "@",
                panelStyle: "@"
            }
        };
    }

    angular
        .module('shared.panel')
        .directive('panel', panel);
})();
(function() {
    'use strict';

    angular.module('nwCategoryItem.controller', []);

    function NwCategoryItemController($scope) {
        
    }

    angular
        .module('nwCategoryItem.controller')
        .controller('NwCategoryItemController', NwCategoryItemController);
})();

// angular.module('nwCategoryItem.controller', []);

//     function NwCategoryItemController($scope) {
    	
//     }

(function() {
    'use strict';

    angular.module('shared.nwCategoryItem', ['nwCategoryItem.controller']);

    function nwCategoryItem() {
        return {
            controller: 'NwCategoryItemController',
            controllerAs: 'nwCategoryItem',
            restrict: 'E',
            templateUrl: '/src/app/shared/menuSide/nwCategoryItem/nwCategoryItem.view.html',
            scope: {
                category: "="
            },
            require: '^nwCategorySelect',
            link: function(scope, element, attrs, NwCategorySelectCont){
                scope.makeActive = function(){
                    NwCategorySelectCont.setActiveCategory(scope.category);
                };
                scope.categoryActive = function() {
                    return NwCategorySelectCont.getActiveCategory() === scope.category; 
                };
                if(!scope.categoryActive()) {
                    return NwCategorySelectCont.getActiveCategory() === scope.category[0]; 
                }
            }
        };
    }

    angular
        .module('shared.nwCategoryItem')
        .directive('nwCategoryItem', nwCategoryItem);
})();

// (function() {
//     'use strict';

//     angular.module('shared.nwCategoryItem', ['nwCategoryItem.controller']);

//     function nwCategoryItem() {
//         return {
//             controller: 'NwCategoryItemController',
//             controllerAs: 'nwCategoryItem',
//             restrict: 'E',
//             templateUrl: '/src/app/shared/menuSide/nwCategoryItem/nwCategoryItem.view.html',
//             scope: {
//                 category: "="
//             },
//             require: "^nwCategorySelect",
//             link: function(scope, element, attrs, nwCategorySelectCtrl){
//                 scope.makeActive = function(){
//                     nwCategorySelectCtrl.setActiveCategory(scope.category);
//                 };
//                 scope.categoryActive = function() {
//                     return nwCategorySelectCtrl.getActiveCategory() === scope.category.name; 
//                 };
//             }
//         };
//     }

//     angular
//         .module('shared.nwCategoryItem')
//         .directive('nwCategoryItem', nwCategoryItem);
// })();


(function() {
    'use strict';

    angular.module('nwCategorySelect.controller', []);

    function NwCategorySelectController($scope, CategoryService) {
        var vm = this;
    	vm.setActiveCategory = function(category) {
            $scope.activeCategory = category; 
        };
        vm.getActiveCategory = function() {
            return $scope.activeCategory;
        };
        return vm;
    }

    angular
        .module('nwCategorySelect.controller')
        .controller('NwCategorySelectController', NwCategorySelectController);
})();

// (function() {
//     'use strict';

//     angular.module('nwCategorySelect.controller', []);

//     function NwCategorySelectController($scope) {
//         var vm = this;
//         vm.setActiveCategory = function(category) {
//             $scope.activeCategory = category.name; 
//         };
//         vm.getActiveCategory = function() {
//             return $scope.activeCategory;
//         };
//         return this;
//     }

//     angular
//         .module('nwCategorySelect.controller')
//         .controller('NwCategorySelectController', NwCategorySelectController);
// })();
(function() {
    'use strict';

    angular.module('shared.nwCategorySelect', ['nwCategorySelect.controller']);

    function nwCategorySelect(CategoryService) {
        return {
            controller: 'NwCategorySelectController',
            controllerAs: 'nwCategorySelect',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/menuSide/nwCategorySelect/nwCategorySelect.view.html',
            link: function(scope, element, attrs) {
                CategoryService.all()
                    .success(function(data){
                    scope.categories = data;
                });
            }
        };
    }

    angular
        .module('shared.nwCategorySelect')
        .directive('nwCategorySelect', nwCategorySelect);
})();

// (function() {
//     'use strict';

//     angular.module('shared.nwCategorySelect', ['nwCategorySelect.controller']);

//     function nwCategorySelect(HomeService) {
//         return {
//             controller: 'NwCategoryItemController',
//             controllerAs: 'nwCategorySelect',
//             replace: true,
//             restrict: 'E',
//             templateUrl: '/src/app/shared/menuSide/nwCategorySelect/nwCategorySelect.view.html',
//             link: function($scope, element, attrs) {
//                 $scope.categories = HomeService.query(); // Data access should be from the link function
//             }
//         };
//     }

//     angular
//         .module('shared.nwCategorySelect')
//         .directive('nwCategorySelect', nwCategorySelect);
// })();
(function() {
    'use strict';

    angular.module('presentationLg.controller', []);

    function PresentationLgController($scope) {
    	var vm = this;
        vm.model = {}
        
        $scope.header = "PresentationLg from PresentationLg por defecto";
        $scope.subheader = "Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!";
    }

    angular
        .module('presentationLg.controller')
        .controller('PresentationLgController', PresentationLgController);
})();
// Hace el servicio tal como yo lo hago
(function() {
    'use strict';

    angular.module('shared.presentationLg', ['presentationLg.controller']);

    function presentationLg() {
        return {
            controller: 'PresentationLgController',
            controllerAs: 'presentationLg',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/presentation/presentationLg/presentationLg.view.html',
            scope: {
                header: "@",
                subheader: "@"
            }
        };
    }

    angular
        .module('shared.presentationLg')
        .directive('presentationLg', presentationLg);
})();
(function() {
    'use strict';

    angular.module('presentationXlg.controller', []);

    function PresentationXlgController($scope) {
    	$scope.header = "YOU FAVORITE SOURCE OF FREE BOOTSTRAP THEMES";
        $scope.subheader = "Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!";
        $scope.ctatext = "Mira lo Ultimo";
        $scope.btnclass = "btn btn-danger oval text-uppercase";
    }

    angular
        .module('presentationXlg.controller')
        .controller('PresentationXlgController', PresentationXlgController);
})();
// Hace el servicio tal como yo lo hago
(function() {
    'use strict';

    angular.module('shared.presentationXlg', ['presentationXlg.controller']);

    function presentationXlg() {
        return {
            controller: 'PresentationXlgController',
            controllerAs: 'presentationXlg',
            replace: true,
            restrict: 'E',
            templateUrl: '/src/app/shared/presentation/presentationXlg/presentationXlg.view.html',
            scope: {
                ctatext: "@",
                btnclass: "@",
                header: "@",
                subheader: "@"
            }
        };
    }

    angular
        .module('shared.presentationXlg')
        .directive('presentationXlg', presentationXlg);
})();
(function () {
    'use strict';

    angular.module('template1.controller', []);

    function Template1Controller(TwoColumnsService) {
		var vm = this;
		vm.model = {};

		TwoColumnsService.template1()
		.success(function(data){
			vm.model.element = data;
		});
    }
    
    angular
        .module('template1.controller')
        .controller('Template1Controller', Template1Controller);
})();
(function() {
    'use strict';

    angular.module('components.template1', ['template1.controller']);

    function template1() {
        return {
            controller: 'Template1Controller',
            controllerAs: 'template1',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template1/template1.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template1')
        .directive('template1', template1);
})();
(function () {
    'use strict';

    angular.module('template2.controller', []);

    function Template2Controller() {
		var vm = this;
		vm.model = {};
    }
    
    angular
        .module('template2.controller')
        .controller('Template2Controller', Template2Controller);
})();
(function() {
    'use strict';

    angular.module('components.template2', ['template2.controller']);

    function template2() {
        return {
            controller: 'Template2Controller',
            controllerAs: 'template2',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template2/template2.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template2')
        .directive('template2', template2);
})();
(function () {
    'use strict';

    angular.module('template3.controller', []);

    function Template3Controller() {
		var vm = this;
		vm.model = {};
    }
    
    angular
        .module('template3.controller')
        .controller('Template3Controller', Template3Controller);
})();
(function() {
    'use strict';

    angular.module('components.template3', ['template3.controller']);

    function template3() {
        return {
            controller: 'Template3Controller',
            controllerAs: 'template3',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template3/template3.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template3')
        .directive('template3', template3);
})();
(function () {
    'use strict';

    angular.module('template4.controller', []);

    function Template4Controller() {
		var vm = this;
		vm.model = {};
    }
    
    angular
        .module('template4.controller')
        .controller('Template4Controller', Template4Controller);
})();
(function() {
    'use strict';

    angular.module('components.template4', ['template4.controller']);

    function template4() {
        return {
            controller: 'Template4Controller',
            controllerAs: 'template4',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template4/template4.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template4')
        .directive('template4', template4);
})();
(function () {
    'use strict';

    angular.module('template5.controller', []);

    function Template5Controller() {
		var vm = this;
		vm.model = {};
    }
    
    angular
        .module('template5.controller')
        .controller('Template5Controller', Template5Controller);
})();
(function() {
    'use strict';

    angular.module('components.template5', ['template5.controller']);

    function template5() {
        return {
            controller: 'Template5Controller',
            controllerAs: 'template5',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template5/template5.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template5')
        .directive('template5', template5);
})();
(function () {
    'use strict';

    angular.module('template6.controller', []);

    function Template6Controller() {
		var vm = this;
		vm.model = {};
    }
    
    angular
        .module('template6.controller')
        .controller('Template6Controller', Template6Controller);
})();
(function() {
    'use strict';

    angular.module('components.template6', ['template6.controller']);

    function template6() {
        return {
            controller: 'Template6Controller',
            controllerAs: 'template6',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template6/template6.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template6')
        .directive('template6', template6);
})();
(function () {
    'use strict';

    angular.module('template7.controller', []);

    function Template7Controller() {
		var vm = this;
		vm.model = {};
    }
    
    angular
        .module('template7.controller')
        .controller('Template7Controller', Template7Controller);
})();
(function() {
    'use strict';

    angular.module('components.template7', ['template7.controller']);

    function template7() {
        return {
            controller: 'Template7Controller',
            controllerAs: 'template7',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template7/template7.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template7')
        .directive('template7', template7);
})();
(function () {
    'use strict';

    angular.module('template8.controller', []);

    function Template8Controller() {
		var vm = this;
		vm.model = {};
    }
    
    angular
        .module('template8.controller')
        .controller('Template8Controller', Template8Controller);
})();
(function() {
    'use strict';

    angular.module('components.template8', ['template8.controller']);

    function template8() {
        return {
            controller: 'Template3Controller',
            controllerAs: 'template8',
            replace: true,
            restrict: 'E',
            templateUrl: 'components/template/template8/template8.view.html',
            scope: {}
        };
    }

    angular
        .module('components.template8')
        .directive('template8', template8);
})();