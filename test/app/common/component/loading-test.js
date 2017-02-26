(function() {
  "use strict";
  describe("Loading component test", function() {
    var componentController;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_) {
      componentController = _$componentController_('loading', {});
    }));

    it("test component is initialized", function() {
      expect(componentController).toBeDefined();

    });


  });
})();
