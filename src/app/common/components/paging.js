/**
 * Common Component - paging
 * @namespace common
 */
(function() {
  'use strict';

  angular.module('app.common')
    .component('paging', {
      templateUrl: 'views/paging.html',
      controller: controller,
      controllerAs: "vm",
      bindings: {
        links: "=",
        getData: "&",
        options: "="
      }
    });
  controller.$inject = ["linkParser"];
  function controller(linkHeaderParser) {
    var vm = this;
    vm.update = update;
    vm.link = linkHeaderParser.parse(vm.links);

    vm.$onInit = function() {
      setLastPage();
    }

    /**
    * Set last page
    **/

    function setLastPage() {
      if (vm.link.last) {
        vm.lastPage = vm.link.last.page;
        return;
      }
      vm.lastPage = vm.options.page;
    }
    /*
    * Method update data on paging
    * @desc Gets the page and updates it
    */
    function update(rel) {
      if (vm.link[rel]) {
        vm.options.page = vm.link[rel].page;
        vm.options.per_page = vm.link[rel].per_page;
        vm.getData();
      }
    }
  }
})();
