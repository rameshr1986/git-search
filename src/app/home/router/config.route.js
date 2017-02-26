/**
 * Router Factory
 * @desc Router to controller for home
 * @namespace home
 * @returns {object} state
 */
(function() {
  'use strict';

  angular
    .module('app.home')
    .run(appRun);

  appRun.$inject = ['routerHelper']

  /* @ngInject */
  function appRun(routehelper) {
    routehelper.configureStates(getStates(), 'home');
  }

  function getStates() {
    return [
      {
        state: 'home',
        config: {
          url: '/home',
          component: 'home'
        }
      },
      {
        state: 'home.search',
        config: {
          url: '/:key',
          component: 'home'
        }
      }
    ];
  }
})();
