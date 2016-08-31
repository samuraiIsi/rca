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