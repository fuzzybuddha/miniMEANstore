var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function() {
 return {
   index: function(req, res) {
       Product.find({}, function(err, results) {
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
      var product = new Product({name: req.body.name, imgurl: req.body.imgurl, description: req.body.description, quantity: req.body.quantity, created_at: req.body.created_at});
      // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error
      product.save(function(err, product){
        if(err) {
          console.log(err);
        } else {
          console.log(product);
          res.json({response: "success"});
        }
      });
    },
    destroy: function(req, res){
      console.log(req.params.id);
        Product.remove({_id: req.params.id}, function (err, results){
          if(err) {
            console.log(err);
          } else {
            res.json({response: "success"});
          }
      });
    }
  }

})();
