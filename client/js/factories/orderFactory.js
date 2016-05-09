customers_app.factory('OrderFactory', function($http){
  var factory = {};
  var orders = [];
  var products = [];

  factory.getorders = function(callback) {

    $http.get('/orders').success(function(output){
      orders = output;
      callback(orders);
    })
  }

  // note the use of callbacks!
  // Restful syntax: create = add one to that object
  factory.create = function(info, callback) {
    info.created_at = moment();
    info.product_name = info.product.name;
    info.product=info.product._id;
    $http.post('/addorder', info).success(function(output) {
      if(output.response == "success"){
        orders.push({customer: info.customer, quantity: info.quantity, product_name: info.product_name, created_at: info.created_at});
      }else{
        console.log("not enough ", info.product_name);
      }
      callback(orders);
    });
  }

  factory.delete = function(info, callback) {
    $http.delete('/deleteorder/'+info._id, info).success(function(output) {
      orders.splice(orders.indexOf(info), 1);
      callback(orders);
    });
  }

  return factory;
});
