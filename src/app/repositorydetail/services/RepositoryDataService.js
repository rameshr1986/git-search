/**
 * Get issues data Service
 * @desc Service to fetch issues for particular repository
 * @namespace issues
 */
(function() {
  'use strict';

  angular.module('app.repositorydetail')
    .service('RepositoryDataService', RepositoryDataService);

  /**
  * Data service to get issues for repository
  **/
  RepositoryDataService.$inject = ['$http', '$log'];

  function RepositoryDataService($http, $log) {
    return {
      getIssues: getIssues,
      getRepository: getRepository
    };

    /**
      @desc Retruns issues for repository
        @parmas {string} username
       @returns {object}
  **/
    function getIssues(path, params) {
      return $http.get("repos/" + path + "/issues", {
        params: params
      })
        .then(getDataComplete)
        .catch(getDataFailed);
    }



    function getRepository(username, reponame) {
      return $http.get('/repos/' + username + "/" + reponame)
        .then(getDataComplete)
        .catch(getDataFailed);
    }

    function getDataComplete(response) {
      return {
        data: response.data,
        headers: response.headers
      };
    }

    function getDataFailed(error) {
      $log.error('GetUser data service failed' + error.data);
      return {
        data: {
          "message": "Unexpected error occured"
        }
      }
    }
  }

})();
