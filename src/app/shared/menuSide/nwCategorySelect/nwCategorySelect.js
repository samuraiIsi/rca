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