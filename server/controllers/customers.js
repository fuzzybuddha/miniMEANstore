var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function() {
 return {
   index: function(req, res) {
       Customer.find({}, function(err, results) {
         if(err) {
           console.log(err);
         } else {
           res.json(results);
         }
     })
   },
   create: function(req, res) {
      console.log("POST DATA", req.body);
      // create a new User with the name and age corresponding to those from req.body
      var customer = new Customer({name: req.body.name, created_at: req.body.created_at});
      // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error
      customer.save(function(err, customer){
        if(err) {
          console.log(err);
        } else {
          console.log("CUSTOMER: ", customer);
          res.json(customer);
        }
      });
    },
    destroy: function(req, res){
      console.log("got to destroy function in model");
      console.log(req.params.id);
        Customer.remove({_id: req.params.id}, function (err, results){
          if(err) {
            console.log(err);
          } else {
            res.json({response: "success"});
          }
      });
    }
  }

})();
