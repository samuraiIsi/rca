(function() {
    'use strict';

    angular.module('shared.nwCategoryItem', ['nwCategoryItem.controller']);

    function nwCategoryItem($window) {
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
                    $window.scrollTo(0, -100);
                    NwCategorySelectCont.setActiveCategory(scope.category);
                };
                scope.categoryActive = function() {
                    return NwCategorySelectCont.getActiveCategory() === scope.category; 
                };
                // if(!scope.categoryActive()) {
                //     return NwCategorySelectCont.getActiveCategory() === scope.category[0]; 
                // }
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

