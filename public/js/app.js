// Define the `phonecatApp` module
// var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
/*phonecatApp.controller('PhoneListController', function PhoneListController($scope) {

  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});
*/
var counterApp = angular.module('counterApp', []);
counterApp.controller('counterController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.myFunc = function() {
        $scope.count++;
    };
}]);

//make live changes with ng-click, menu items
//attach controllers to divs?
//todo with app, grab data from the database
//how do i make this mvc complient?  data from db?
//maybe try testing?
/*describe('PhoneListController', function() {

  it('should create a `phones` model with 3 phones', function() {
    var scope = {};
    var ctrl = new PhoneListController(scope);

    expect(scope.phones.length).toBe(3);
  });

});*/
