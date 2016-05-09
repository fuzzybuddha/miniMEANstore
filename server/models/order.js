// require mongoose
var mongoose = require('mongoose');
// create the schema
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
  customer: String,
  quantity: String,
  product: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  product_name: String,
  created_at: String
})
// register the schema as a model
var Order = mongoose.model('Order', OrderSchema);
