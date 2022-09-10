'use strict';

angular
  .module('confirmClick')
  .directive('confirmClick', function ($rootScope, $location) {
    return {
      link: function (scope, element, attr) {
        var msg = attr.confirmClick || 'Are you sure?';
        var clickAction = attr.confirmedClick;

        element.bind('click', function (event) {
          if (window.confirm(msg)) {
            $rootScope.$apply(function () {
              console.log('clickAction' + clickAction);
              $location.path(clickAction);
            });
          }
        });
      },
    };
  });

// angular
//   .module('confirmClick')
//   .directive('confirmClick', function ($rootScope, $location) {
//     return {
//       scope: { message: '@message', eq: '=eq', post: '=post' },
//       restrict: 'E',
//       template: `<a ng-href="#">{{post.title}} {{post.publishDate}}</a>`,
//       link: function (scope, element, attr) {
//         var msg = scope.message || 'Are you sure?';
//         element.bind('click', function (event) {
//           if (window.confirm(msg)) {
//             console.log(`/blog/${scope.post.id}`);

//             $rootScope.$apply(function () {
//               $location.path(`#/blog/${scope.post.id}`);
//             });
//           }
//         });
//       },
//     };
//   });
