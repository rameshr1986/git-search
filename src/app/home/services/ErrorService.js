/**
 * Get Error Service
 * @desc Service to get errors
 * @namespace home
 */
(function(){
'use strict';


angular.module('app.home')
	.service('ErrorService',ErrorService);

/**
* Error Service to identify errors
**/

var error ={};
function ErrorService(){
    return {
	  checkForError:checkForError,
	  getMessage:getMessage
	};
   
 function checkForError(data){
	error.message="";
	if(data){
      if(data.length === 0){
         error.message = "No repositories found";
	  }
	  else if(data.message){
         error.message = "Github user not found";
	  }
	}
	return error;
 }

 function getMessage(){
   return error.message;
 }
}

})();