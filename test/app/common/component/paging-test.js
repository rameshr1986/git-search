(function() {
  "use strict";
  describe("Paging component test", function() {
    var componentController,
      linkParser;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_, _linkParser_) {
      linkParser = _linkParser_;
      spyOn(linkParser, "parse").and.returnValue({
        "last": {
          page: 2,
          per_page: 10
        }
      });
      var options = {
        page: 1,
        per_page: 10
      };
      var getData = function() {};
      var links = "<url?page=2&per_page=10>;rel='next'";
      componentController = _$componentController_('paging', {}, {
        options: options,
        getData: getData,
        links: links
      });
    }));

    it("test component is initialized", function() {
      componentController.$onInit();
      expect(componentController.lastPage).toEqual(2);
      expect(componentController.link).toBeDefined();
      expect(componentController).toBeDefined();
    });

    it("test component update", function() {
      componentController.$onInit();
      componentController.update('last');
      expect(componentController.options.page).toEqual(2);
      expect(componentController.options.per_page).toEqual(10);
    });

  });
})();
