(function () {
  'use strict';

  angular
    .module('Blog.posts', [])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/posts',
        views: {
          '': {
            templateUrl: './modules/post/list/template.html',
            controller: 'PostsCtrl',
            controllerAs: '$ctrl'
          }
        }
      })
      .state('new-post', {
        url: '/posts/create',
        views: {
          '': {
            templateUrl: './modules/post/add/template.html',
            controller: 'AddPostCtrl',
            controllerAs: '$ctrl'
          }
        }
      })
      .state('post', {
        url: '/posts/:id',
        views: {
          '': {
            templateUrl: './modules/post/details/template.html',
            controller: 'PostCtrl',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
