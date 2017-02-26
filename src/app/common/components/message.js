/**
 * Common Component - message
 * Show message when no data found
 * @params {message:string, flag:boolean}
 * @namespace common
 */
(function() {
  'use strict';

  angular.module('app.common')
    .component('message', {
      templateUrl: 'views/message.html',
      bindings: {
        flag: "=",
        message: "<"
      },
      controllerAs: "vm"
    });
})();
