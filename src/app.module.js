(function() {
  'use strict';

  angular.module('app', [
    'app.common',
    'app.repositorydetail',
    'app.home'
  ]).value("$routerRootComponent", "main");
})();
