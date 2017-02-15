(function(){
	"use strict";
describe("ErrorService Unit Tests", function() {
var ErrorService;
  beforeEach(module('app'));
  //Inject modules
  beforeEach(inject(function (_ErrorService_) {
    ErrorService = _ErrorService_;
  }));

  
it("test ErrorService is initialized", function(done){
  expect(ErrorService).toBeDefined();
  expect(ErrorService.checkForError).toBeDefined();
  done();
});

it("test checkForErrors method success", function(done){
  ErrorService.checkForError();
  expect(ErrorService.getMessage()).toEqual("");
  done();
});
it("test checkForErrors method return no user found error", function(done){
  ErrorService.checkForError({message:"no found"});
  expect(ErrorService.getMessage()).toEqual("Github user not found");
  done();
});

it("test checkForErrors method return no repositories found error", function(done){
  ErrorService.checkForError([]);
  expect(ErrorService.getMessage()).toEqual("No repositories found");
  done();
});

});
})();