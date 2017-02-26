(function(){
"use strict";
describe("Footer component test", function(){
var componentController;
beforeEach(module("app"));
beforeEach(inject(function (_$componentController_) {
   componentController = _$componentController_('footer',{});
}));

it("test component is initialized", function(){
   expect(componentController).toBeDefined();

});


});
})();