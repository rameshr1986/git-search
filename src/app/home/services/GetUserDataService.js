/**
 * Get user data Service
 * @desc Service to fetch Git hub repositories
 * @namespace home
 */
(function() {
  'use strict';

  angular.module('app.home')
    .service('GetUserDataService', GetUserDataService);

  /**
  * Data service to get repositories for github users
  **/
  GetUserDataService.$inject = ['$http', '$log'];

  function GetUserDataService($http, $log) {
    return {
      getRepositories: getRepositories
    };
    /**
	   * @desc Retruns repositories object for user
     *  @parmas {string} username
		 *  @returns {object}
	**/
    function getRepositories(username, params) {
      params = params || {};
      params.q = username;
      return $http.get('/search/repositories', {
        params: params
      })
        .then(getDataComplete)
        .catch(getDataFailed);
    }

    function getDataComplete(response, status, headers) {
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
      };
    }
  }
})();
