angular.module('cdfinance').controller("BuyController", BuyController);

function BuyController($http, $window, AuthFactory, jwtHelper, $location) {
  var vm = this;
  
  vm.buy = function() {
    if ($window.sessionStorage.token && AuthFactory.isLoggedIn) {
      var token = $window.sessionStorage.token;
      var decodedToken = jwtHelper.decodeToken(token);
      var username = decodedToken.username;
      
      var data = {"symbol" : vm.symbol, "amount": vm.amount}
      
      $http.post('/api/users/'+ username +"/stocks", data).then(function(response) {
        console.log(response, "15");
        //check the responses
        // displays confirmation message on stock bought
        vm.message = "Stock Bought";
        // hides error message
        vm.error = '';
      }).catch(function(error) {
        console.log(error);
        // displays error if stock not found
        vm.error = "Stock not found";
      })
    } else {
      $location.path('/');
    }
  }
}