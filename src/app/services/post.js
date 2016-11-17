(function () {
  'use strict';

  angular
    .module('Blog.posts')
    .factory('Post', Post);

    function Post() {
      var posts = [];

      var service = {
        add: add,
        list: list,
        find: find,
        remove: remove
      };

      return service;

      function add(post) {
        var id = (posts.length > 0) ? posts[posts.length - 1].id + 1 : 0;
        var post = angular.copy(post);
        post.id = id;
        posts.push(post);
      }

      function remove(index) {
        posts.splice(index, 1);
      }

      function find(id) {
        var post = posts.filter(function (post) {
          return post.id = id;
        });

        return post && post[0] || null;
      }

      function list() {
        return posts;
      }
    }
})();