customers_app.controller('ProductsController', function($scope, ProductFactory, OrderFactory, CustomerFactory){
  $scope.maxQty = 10;
  $scope.getMaxQty = function(num){
    return new Array(num);
  }

  ProductFactory.getproducts(function(data){
    $scope.products = data;
  });

  $scope.addproduct = function() {
    if(ValidURL($scope.new_product.imgurl)){
        ProductFactory.create($scope.new_product, function(){
          $scope.new_product = {};
        });
    }else{
        $scope.productURLerr = "Please enter a valid URL.";
        console.log("hi");
    }
  }

  function ValidURL(url) {
  return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

  OrderFactory.getorders(function(data){
    $scope.orders = data;
  });

  CustomerFactory.getcustomers(function(data){
    $scope.customers = data;
  });
});
