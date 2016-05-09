var orders = require('../controllers/orders.js');
var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');


module.exports = function(app) {

  app.get('/customers', function(req,res){
    customers.index(req, res);
  });

  app.get('/products', function(req,res){
    products.index(req, res);
  });

  app.post('/addcustomer', function (req, res) {
    customers.create(req, res);
  });

  app.post('/addproduct', function (req, res) {
    products.create(req, res);
  });

  app.delete('/deletecustomer/:id', function (req, res) {
    customers.destroy(req, res);
  });

  app.get('/orders', function(req,res){
    orders.index(req, res);
  });

  app.post('/addorder', function (req, res) {
    orders.create(req, res);
  });


}
