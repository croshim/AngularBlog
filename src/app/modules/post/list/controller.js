(function () {
  'use strict';

  angular
    .module('Blog.posts')
    .controller('PostsCtrl', PostsCtrl);

  function PostsCtrl(Post) {
    var vm = this;

    vm.posts = Post.list();
    vm.remove = remove;

    function remove(id) {
      Post.remove(id);
    }
  }
}());
