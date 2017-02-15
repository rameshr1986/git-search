/**
 * Get user data Service
 * @desc Service to fetch Git hub users
 * @namespace home
 */
(function(){
'use strict';

angular.module('app.home')
	.service('GetUserDataService',GetUserDataService);

/**
* Data service to get repositories for github users
**/
GetUserDataService.$inject = ['$http', '$log'];

function GetUserDataService($http, $log){
    return {
        getRepositories: getRepositories
    };
    /**
	    @desc Retruns repositories object for user
        @parmas {string} username
		@returns {object}
	**/
	function getRepositories(username) {
        return $http.jsonp('https://api.github.com/users/'+username+'/repos?callback=JSON_CALLBACK')
            .then(getDataComplete)
            .catch(getDataFailed);
    }

	function getDataComplete(response) {
            return response.data;
        }

        function getDataFailed(error) {
            $log.error('GetUser data service failed' + error.data);
			return {data:{"message":"Unexpected error occured"}};
        }
}

})();