angular.module('cdfinance').controller("FindController", FindController);

function FindController($http) {
  // hide stock message when input symbol field has focus
  $('#symbol').keypress(function() {
    $('#stock-message').hide();  
  });
  // TODO find a way to remove "stock-message" from find-dontroller.html,
  // until successful response
  $('#stock-message').hide();
  var vm = this;
  vm.find = function() {
    var symbol = vm.symbol;
    console.log("8", symbol);
    
    $http.get("/api/stocks/" + symbol)
      .then(function(response) {
        // displays "stock-message" on successful response
        $('#stock-message').show();
        console.log("found stock")
        // vm.error = ''; clears error from page, find-controller.js:13
        vm.error = '';
        var stockprice = response.data.price
        vm.stockprice = stockprice;
    }).catch(function(error) {
      if (error) {
        vm.error = "Stock not found";
      }
    })
  }
}