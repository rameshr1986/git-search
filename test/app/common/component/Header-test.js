(function(){
"use strict";
describe("Header component test", function(){
var componentController;
beforeEach(module("app"));
beforeEach(inject(function (_$componentController_) {
   componentController = _$componentController_('header',{});
}));

it("test component is initialized", function(){
   expect(componentController).toBeDefined();
});
});
})();