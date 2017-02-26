(function() {
  "use strict";
  describe("Message component test", function() {
    var componentController;
    beforeEach(module("app"));
    beforeEach(inject(function(_$componentController_) {
      componentController = _$componentController_('message', {});
    }));

    it("test component is initialized", function() {
      expect(componentController).toBeDefined();

    });


  });
})();
