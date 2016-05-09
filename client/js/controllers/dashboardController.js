customers_app.controller('DashboardController', function($scope, OrderFactory, CustomerFactory, ProductFactory){
  $scope.maxQty = 10;
  $scope.getMaxQty = function(num){
    return new Array(num);
  }

  $scope.getTimeAgo = function(created_at){
    return moment(created_at).fromNow();
  }

  OrderFactory.getorders(function(data){
    $scope.orders = data;
  });

  ProductFactory.getproducts(function(data){
    $scope.products = data;
  });

  CustomerFactory.getcustomers(function(data){
    $scope.customers = data;
  });
});
