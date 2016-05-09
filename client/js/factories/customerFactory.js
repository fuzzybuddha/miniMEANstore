customers_app.factory('CustomerFactory', function($http){
  var factory = {};
  var customers = [];
  factory.getcustomers = function(callback) {
    $http.get('/customers').success(function(output){
      customers = output;
      callback(customers);
    })
  }
  // note the use of callbacks!
  // Restful syntax: create = add one to that object
  factory.create = function(info, callback) {
    info.created_at = moment();
    $http.post('/addcustomer', info).success(function(output) {
      customers.push(output);
      callback(customers);
    });
  }

  factory.delete = function(info, callback) {
    $http.delete('/deletecustomer/'+info._id, info).success(function(output) {
      customers.splice(customers.indexOf(info), 1);
      callback(customers);
    });
  }
  return factory;
  });
