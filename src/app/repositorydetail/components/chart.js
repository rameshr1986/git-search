/**
 * Charts Controller
 * @namespace issues
 */
(function() {
  "use strict";

  angular.module("app.repositorydetail").component("chart", {
    templateUrl: "views/chart.html",
    controllerAs: "vm",
    controller: controller,
    bindings: {
      properties: '='
    }
  });

  function controller() {
    var vm = this;
  }

})();
