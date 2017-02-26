/**
 * code Controller
 * @namespace issues
 */
(function() {
  "use strict";

  angular.module("app.repositorydetail").component("code", {
    templateUrl: "views/code.html",
    controllerAs: "vm",
    controller: controller,
    bindings: {
      repository: '='
    }
  });

  function controller() {
    var vm = this;
  }

})();
