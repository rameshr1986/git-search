/**
 * issues Controller
 * @namespace issues
 */
(function() {
  "use strict";

  angular.module("app.repositorydetail").component("repositoryDetail", {
    templateUrl: "views/repositorydetail.html",
    controllerAs: "vm",
    controller: controller
  });
  controller.$inject = ["RepositoryDataService", "$stateParams", "$state"];
  function controller(RepositoryDataService, $stateParams, $state) {
    var vm = this;
    vm.username = $stateParams.username;
    vm.reponame = $stateParams.reponame;
    vm.propertiesForChart = ["open_issues_count", "forks_count", "watchers_count", "stargazers_count"];
    vm.chartProperties = {
      chart: {
        caption: "Repo overview",
        subCaption: "Details of repository",
        width: '50%'
      },
      data: []
    };
    vm.goBack = goBack;

    vm.$onInit = function() {
      RepositoryDataService.getRepository(vm.username, vm.reponame).then(apiComplete);
      $state.go('repository.code');
    }

    function goBack() {
      $state.go("home.search", {
        key: vm.repository.name
      });
    }

    function apiComplete(response) {
      vm.repository = response.data;
      getChartProperties();
    }

    function getChartProperties() {
      var dataSource = [];
      vm.chartProperties.chart.caption = vm.repository.name;
      angular.forEach(vm.propertiesForChart, function(property, key) {
        if (vm.repository[property]) {
          var dataObj = {
            label: property,
            value: vm.repository[property]
          };
          dataSource.push(dataObj);
        }
      });
      vm.chartProperties.data = dataSource;
    }
  }

})();
