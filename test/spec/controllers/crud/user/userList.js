'use strict';

describe('Controller: CrudUserUserlistCtrl', function () {

  // load the controller's module
  beforeEach(module('testGruntMavenApp'));

  var CrudUserUserlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrudUserUserlistCtrl = $controller('CrudUserUserlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
