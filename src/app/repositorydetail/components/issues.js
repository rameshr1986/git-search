/**
 * issues Controller
 * @namespace issues
 */
(function() {
  "use strict";

  angular.module("app.repositorydetail").component("issues", {
    templateUrl: "views/issues.html",
    controllerAs: "vm",
    controller: controller,
    bindings: {
      repository: '='
    }
  });
  controller.$inject = ["RepositoryDataService"];
  function controller(RepositoryDataService) {
    var vm = this;
    vm.isPageLoading = false;
    vm.hasResults = false;
    vm.getIssues = getIssues;
    vm.options = {
      state: "open",
      page: 1,
      per_page: 10,
    };

    vm.$onInit = function() {
      getIssues();
    }

    function getIssues() {
      vm.isPageLoading = true;
      vm.hasResults = true;
      RepositoryDataService.getIssues(vm.repository.full_name, vm.options).then(apiComplete);
    }

    function apiComplete(response) {
      if (response && response.data) {
        vm.issues = response.data;
        vm.links = response.headers("Link");
        vm.hasResults = vm.issues.length > 0;
      }
      vm.isPageLoading = false;
    }
  }

})();
