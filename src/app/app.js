(function() {
  'use strict';

  angular
    .module('Blog', [
      'ui.router',
      'Blog.posts'
    ])
    .run(run);

  function run() {

  }
}());
