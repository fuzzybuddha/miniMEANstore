var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
 return {
   index: function(req, res) {
       Order.find({}, function(err, orders) {
         if(err) {
           console.log("indexerror: ", err);
         } else {
           console.log("orders: ", orders);
         }
     })
     .populate('product')
     .exec(function(err, data) {
       console.log(data);
       res.json(data);
     })
   },
   create: function(req, res) {
      console.log("POST DATA", req.body);
      // create a new User with the name and age corresponding to those from req.body
      var order = new Order({customer: req.body.customer, quantity: req.body.quantity, product: req.body.product, product_name: req.body.product_name, created_at: req.body.created_at});
      var product;

      Product.findOne({_id: order.product}, function(err, product){
        if(err){
          console.log(err);
        }else{
          product_quantity = product.quantity;
          console.log("product_quantity: ", product_quantity);
          if(product.quantity-order.quantity>=0){
            order.save(function(err){
              if(err) {
                console.log(err);
              } else {
                product.quantity = product.quantity - order.quantity;
                product.save();
                res.json({response: "success"});
              }
            });
          }else{
            console.log("no more ", product.name, " left...");
            res.json({response: "fail"});
          }
        }
      });





      // product.quantity = product.quantity - order.quantity;
      // product.save();


      // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error
      // order.save(function(err){
      //   if(err) {
      //     console.log(err);
      //   } else {
      //     Product.findOne({_id: order.product}, function(err, product){
      //       if(err){
      //         console.log(err);
      //       }else{
      //
      //         res.json({response: "success"});
      //       }
      //     });
      //   }
      // });
    },
    destroy: function(req, res){
      console.log(req.params.id);
        Order.remove({id: req.params.id}, function (err, results){
          if(err) {
            console.log(err);
          } else {
            res.json({response: "success"});
          }
      });
    }
  }

})();
