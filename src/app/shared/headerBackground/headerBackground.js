// (function() {
//     'use strict';

//     angular.module('shared.headerBg', []);

//     // function headerBg() {
//     //     return {
//     //         link: function(scope, element, attrs) {
//     //             element.css("background-image","url(" + attrs.headerBg + ")")
//     //         }
//     //     }
//     // }
//     function headerBg() {
//         return function(scope, element, attrs) {
//             var url = attrs.headerBg;
//             element.css({
//                 'background-image': 'url(' + attrs.headerBg +')',
//                 'background-size' : 'cover'
//             });
//         };
//     }
// // header-bg="{{home.model.element.headerbg}}"
//     angular
//         .module('shared.headerBg')
//         .directive('headerBg', headerBg);
// })();