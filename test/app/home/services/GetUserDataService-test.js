<<<<<<< HEAD
(function() {
  "use strict";
  describe("GetUserDataService Unit Tests", function() {
    var GetUserDataService,
      httpBackend,
      http;
    beforeEach(module('app'));
    //Inject modules
    beforeEach(inject(function(_GetUserDataService_, $httpBackend, _$http_) {
      GetUserDataService = _GetUserDataService_;
      http = _$http_;
      httpBackend = $httpBackend;
    //httpBackend.whenGET("views/home.html").respond(200, {
    //  products: ["", ""]
    //});
    //httpBackend.flush();
    }));
    // http request flush
    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it("test GetUserDataService is initialized", function(done) {
      expect(GetUserDataService).toBeDefined();
      expect(GetUserDataService.getRepositories).toBeDefined();
      done();
    });

    it("test getRepositories method success", function(done) {
      var response = httpBackend.whenGET("/search/repositories?q=sample").respond(200, {
        data: [{}, {}],
        headers: function() {}
      });
      var result = GetUserDataService.getRepositories("sample", {});
      httpBackend.flush();
      result.then(function(result) {
        expect(result.data.data.length).toEqual(2);
      });
      done();
    });

    it("test getRepositories method failure", function(done) {
      var response = httpBackend.whenGET("/search/repositories?q=sample").respond(400, {
        data: [{}, {}]
      });
      var result = GetUserDataService.getRepositories("sample", {});
      httpBackend.flush();
      result.catch(function(result) {
        expect(result.data.data.length).toEqual(2);
      });
      done();
    });
  });
})();
=======
(function(){
	"use strict";
describe("GetUserDataService Unit Tests", function() {
var GetUserDataService, httpBackend, http;
  beforeEach(module('app'));
  //Inject modules
  beforeEach(inject(function (_GetUserDataService_, $httpBackend, _$http_) {
    GetUserDataService = _GetUserDataService_;
	http = _$http_;
	httpBackend = $httpBackend;
    httpBackend.whenGET("views/home.html").respond(200,{products:["",""]});
	httpBackend.flush();
  }));
  // http request flush
  afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
   });
  
it("test GetUserDataService is initialized", function(done){
  expect(GetUserDataService).toBeDefined();
  expect(GetUserDataService.getRepositories).toBeDefined();
  done();
});

it("test getRepositories method success", function(done){
  var response = httpBackend.whenJSONP("https://api.github.com/users/sample/repos?callback=JSON_CALLBACK").respond(200,{data:[{},{}]});
  var result = GetUserDataService.getRepositories("sample");
  httpBackend.flush();
  result.then(function(result){
	  expect(result.data.length).toEqual(2);
  });
  done();
});

it("test getRepositories method failure", function(done){
  var response = httpBackend.whenJSONP("https://api.github.com/users/sample/repos?callback=JSON_CALLBACK").respond(400,{data:[{},{}]});
  var result = GetUserDataService.getRepositories("sample");
  httpBackend.flush();
  result.catch(function(result){
	  expect(result.data.length).toEqual(2);
  });
  done();
});
});
})();
>>>>>>> 4396d0a623c8250cb189595b9ec83a0761b30455
