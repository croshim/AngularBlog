(function () {
  'use strict';

  angular
    .module('Blog.posts')
    .controller('PostCtrl', PostCtrl);

  function PostCtrl($stateParams, Post) {
    var vm = this;

    vm.post = Post.find($stateParams.id);
  }
}());
