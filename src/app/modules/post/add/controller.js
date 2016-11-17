(function () {
  'use strict';

  angular
    .module('Blog.posts')
    .controller('AddPostCtrl', AddPostCtrl);

  function AddPostCtrl(Post) {
    var vm = this;

    vm.post = {
      title: '',
      body: ''
    };

    vm.create = create;

    function reset() {
      vm.post.title = '';
      vm.post.body = '';
    }

    function create(form) {
      if (form.$invalid) {
        return;
      }

      Post.add(vm.post);
      reset();
    }
  }
}());
