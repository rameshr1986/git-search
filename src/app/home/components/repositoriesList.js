/**
 * Home Component - repositoriesList
 * @namespace home
 */
(function(){
'use strict';

angular.module('app.home')
	.component('repositoriesList',{
      templateUrl: 'views/repositoriesList.html',
	  replace:true,
	  bindings:{
       repositories:"="
	  },
	  controllerAs:"vm"
});
})();