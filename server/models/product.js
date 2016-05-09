// require mongoose
var mongoose = require('mongoose');
// create the schema
var ProductSchema = new mongoose.Schema({
  name: String,
  imgurl: String,
  description: String,
  quantity: Number,
  created_at: String
})
// register the schema as a model
var Product = mongoose.model('Product', ProductSchema);
