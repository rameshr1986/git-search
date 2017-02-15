(function(){
"use strict";
describe("Error component test", function(){
var componentController;
beforeEach(module("app"));
beforeEach(inject(function (_$componentController_) {
   componentController = _$componentController_('error',{});
}));

it("test component is initialized", function(){
   expect(componentController).toBeDefined();

});


});
})();