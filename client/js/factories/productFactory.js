customers_app.factory('ProductFactory', function($http){
  var factory = {};
  var products = [];

  factory.getproducts = function(callback) {
    $http.get('/products').success(function(output){
      products = output;
      callback(products);
    })
  }

  // note the use of callbacks!
  // Restful syntax: create = add one to that object
  factory.create = function(info, callback) {
    info.created_at = moment().format('MMMM Do, YYYY');
    console.log(products);
    $http.post('/addproduct', info).success(function(output) {
      products.push(info);
      callback(products);
    });
  }

  factory.delete = function(info, callback) {
    $http.delete('/deleteproduct/'+info._id, info).success(function(output) {
      orders.splice(products.indexOf(info), 1);
      callback(products);
    });
  }

  factory.updateProductQty = function(info){
    console.log(info.quantity);
    console.log(info.product);
  }

  return factory;
});
