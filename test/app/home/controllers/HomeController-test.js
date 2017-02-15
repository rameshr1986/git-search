(function(){
	"use strict";
describe("Home Controller Unit Tests", function() {
	var $controller, state, errorService, httpBackend;
  beforeEach(module('app'));
  beforeEach(inject(function (_$controller_, _ErrorService_, _$httpBackend_) {
    $controller = _$controller_;
	httpBackend = _$httpBackend_;
	errorService = _ErrorService_;
	httpBackend.whenGET("views/home.html").respond(200,{products:["",""]});
	httpBackend.flush();
  }));

  afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
   });

it("test HomeController is initialized", function(done){
	var $scope = {};
	var controller = $controller('HomeCtrl', { $scope: $scope });
    expect(controller.username).toEqual('');
	expect(controller.repositories).toEqual([]);
	expect(controller.error).toEqual({});
    done();
});

it("test HomeController getRepositories Method success scenario", function(done){
	httpBackend.whenJSONP("https://api.github.com/users/sample/repos?callback=JSON_CALLBACK").respond(200,{data:[{},{}]});
	var $scope = {};
	var controller = $controller('HomeCtrl', { $scope: $scope });
	controller.username = "sample";
    controller.getRepositories();
	httpBackend.flush();
	expect(controller.repositories.length).toEqual(2);
    done();
});

it("test HomeController getRepositories Method with empty username", function(done){
	var $scope = {};
	var controller = $controller('HomeCtrl', { $scope: $scope });
    controller.getRepositories();
	expect(controller.error.message).toEqual("Please enter username");
    done();
});

it("test HomeController getRepositories Method failure scenario", function(done){
	httpBackend.whenJSONP("https://api.github.com/users/sample/repos?callback=JSON_CALLBACK").respond(200,{data:[]});
	var $scope = {};
	var controller = $controller('HomeCtrl', { $scope: $scope });
	controller.username = "sample";
    controller.getRepositories();
	httpBackend.flush();
	expect(controller.error.message).toEqual("No repositories found");
    done();
});

it("test HomeController getRepositories Method failure scenario", function(done){
	httpBackend.whenJSONP("https://api.github.com/users/sample/repos?callback=JSON_CALLBACK").respond(200,{data:{"message":"not found"}});
	var $scope = {};
	var controller = $controller('HomeCtrl', { $scope: $scope });
	controller.username = "sample";
    controller.getRepositories();
	httpBackend.flush();
	expect(controller.error.message).toEqual("Github user not found");
    done();
});

it("test HomeController getRepositories Method failure scenario", function(done){
	httpBackend.whenJSONP("https://api.github.com/users/sample/repos?callback=JSON_CALLBACK").respond(400,{data:{"message":"not found"}});
	var $scope = {};
	var controller = $controller('HomeCtrl', { $scope: $scope });
	controller.username = "sample";
    controller.getRepositories();
	httpBackend.flush();
	expect(controller.error.message).toEqual("Github user not found");
    done();
});

});
})();