/**
 * Router Factory
 * @desc Router to controller for issues
 * @namespace repositorydetail
 * @returns {object} state
 */
(function() {
  'use strict';

  angular
    .module('app.repositorydetail')
    .run(appRun);

  appRun.$inject = ['routerHelper']

  /* @ngInject */
  function appRun(routehelper) {
    routehelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'repository',
        config: {
          url: '/repo/:username/:reponame',
          component: 'repositoryDetail'
        }
      },
      {
        state: 'repository.issues',
        config: {
          url: '/issues',
          component: 'issues'
        }
      },
      {
        state: 'repository.chart',
        config: {
          url: '/chart',
          component: 'chart'
        }
      },
      {
        state: 'repository.code',
        config: {
          url: '/code',
          component: 'code'
        }
      }
    ];
  }
})();
