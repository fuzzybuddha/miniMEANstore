customers_app.controller('OrdersController', function($scope, ProductFactory, OrderFactory, CustomerFactory){
  $scope.maxQty = 10;
  $scope.getMaxQty = function(num){
    return new Array(num);
  }

  $scope.formatDate = function(created_at){
    return moment(created_at).format('MMMM Do, YYYY');
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

  $scope.addorder = function() {
    OrderFactory.create($scope.new_order, function(){
      $scope.new_order = {};
    });
    ProductFactory.updateProductQty($scope.new_order);
  }

  $scope.removeorder = function(order){
    OrderFactory.delete(order, function(){
      $scope.new_order = {};
    })
  }
});
