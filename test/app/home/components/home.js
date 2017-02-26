(function() {
  "use strict";
  describe("Home component test", function() {
    var componentController,
      GetUserDataService,
      promise;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_, _GetUserDataService_) {
      GetUserDataService = _GetUserDataService_;
      componentController = _$componentController_('home', {});
      promise = {
        then: function(callback) {
          callback({
            data: {
              items: ["", ""]
            },
            headers: function() {
              return {};
            }
          });
        }
      }
    }));

    it("test component is initialized", function() {
      componentController.$onInit();
      expect(componentController.hasResults).toEqual(true);
      expect(componentController.options.page).toEqual(1);
      expect(componentController.options.per_page).toEqual(10);
    });

    it("test component is initialized and repositories are loaded", function() {
      componentController.searchKey = "angular";
      spyOn(GetUserDataService, "getRepositories").and.returnValue(promise);
      componentController.$onInit();
      expect(componentController.isPageLoading).toEqual(false);
      expect(componentController.options.page).toEqual(1);
      expect(componentController.options.per_page).toEqual(10);
    });

    it("test component getRepositories", function() {
      componentController.searchKey = "angular";
      spyOn(GetUserDataService, "getRepositories").and.returnValue(promise);
      componentController.getRepositories();
      expect(componentController.isPageLoading).toEqual(false);
      expect(componentController.hasResults).toEqual(true);
    });

  });
})();
