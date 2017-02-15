/**
 * Categories Controller
 * @namespace category
 */
(function(){
'use strict';

angular.module('app.home')
	.controller('HomeCtrl',HomeCtrl);

HomeCtrl.$inject = ['GetUserDataService', 'ErrorService'];


function HomeCtrl(getUserDataService, errorService){
var vm = this;
vm.username='';
vm.repositories =[];
vm.getRepositories = getRepositories;
vm.error = {};

/**
  Method to get list of repositories for user
**/
function getRepositories(){
	    if(vm.username){
           getUserDataService.getRepositories(vm.username)
            .then(apiComplete);
		   return;
		}
       vm.error.message = "Please enter username";
}

function apiComplete(response){
              var error = errorService.checkForError(response.data);
				if(!error.message){
				   vm.error.message ="";
				   vm.repositories= response.data;
				}
				else{
				   vm.repositories =[];
				   vm.error.message = errorService.getMessage();
				}
}

}

})();