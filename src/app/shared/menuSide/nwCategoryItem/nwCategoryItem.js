(function() {
    'use strict';

    angular.module('shared.nwCategoryItem', ['nwCategoryItem.controller']);

    function nwCategoryItem($window) {
        return {
            controller: 'NwCategoryItemController',
            controllerAs: 'nwCategoryItem',
            restrict: 'E',
            templateUrl: 'src/app/shared/menuSide/nwCategoryItem/nwCategoryItem.view.html',
            scope: {
                category: "="
            },
            require: '^nwCategorySelect',
            link: function(scope, element, attrs, NwCategorySelectCont){
                scope.makeActive = function(){
                    var numberForWidthScreen, widthScreen = screen.width;
                    numberForWidthScreen = (widthScreen >= 737) ? -100 : 420;
                    $window.scrollTo(0, numberForWidthScreen);
                    NwCategorySelectCont.setActiveCategory(scope.category);
                };
                scope.categoryActive = function() {
                    return NwCategorySelectCont.getActiveCategory() === scope.category; 
                };
            }
        };
    }

    angular
        .module('shared.nwCategoryItem')
        .directive('nwCategoryItem', nwCategoryItem);
})();