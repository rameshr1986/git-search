/**
 * Home Controller
 * @namespace home
 */
(function() {
  'use strict';

  angular.module('app.home')
    .component('home', {
      templateUrl: "views/home.html",
      controllerAs: "vm",
      controller: controller
    });

  controller.$inject = ['GetUserDataService', '$stateParams'];


  function controller(getUserDataService, $stateParams) {
    var vm = this;
    vm.hasResults = true;
    vm.repositories = [];
    vm.searchKey = $stateParams.key;
    vm.getRepositories = getRepositories;
    vm.options = {
      q: "",
      page: 1,
      per_page: 10,
    };

    /**
    Initialise search list when there
    **/
    vm.$onInit = function() {
      if (vm.searchKey) {
        getRepositories();
      }
    }

    /**
      Method to get list of repositories for user
    **/
    function getRepositories() {
      if (vm.searchKey) {
        vm.repositories = [];
        vm.isPageLoading = true;
        vm.hasResults = true;
        getUserDataService.getRepositories(vm.searchKey, vm.options)
          .then(apiComplete);
        return;
      }
    }


    function apiComplete(response) {
      if (response.data && response.data.items) {
        vm.totalCount = response.data.total_count;
        vm.repositories = response.data.items;
        vm.links = response.headers('Link');
        vm.isPageLoading = false;
        vm.hasResults = response.data.items.length > 0;
      } else {

      }
    }


  }

})();
