/**
 * Common Component - Error
 * @namespace common
 */
(function(){
'use strict';

angular.module('app.common')
	.component('error',{
      templateUrl: 'views/error.html',
	  bindings:{
        error:'='
	  },
	  controllerAs:'vm',
	  replace:true
});
})();