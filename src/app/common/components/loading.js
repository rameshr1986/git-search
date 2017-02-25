/**
 * Common Component - loading
 * Load spinner before api call
 * @namespace common
 */
(function() {
  'use strict';

  angular.module('app.common')
    .component('loading', {
      templateUrl: 'views/loading.html',
      bindings: {
        flag: "="
      },
      controllerAs: "vm"
    });
})();
