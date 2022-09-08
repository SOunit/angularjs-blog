'use strict';

angular.module('blogDetail').component('blogDetail', {
  templateUrl: 'templates/blog-detail.html',
  controller: function (Post, $routeParams, $scope) {
    Post.query(function (data) {
      data.forEach((post) => {
        if (post.id === +$routeParams.id) {
          $scope.post = post;
          $scope.notFound = false;
        }
      });
    });

    $scope.notFound = true;
  },
});
