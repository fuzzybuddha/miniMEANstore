// require mongoose
var mongoose = require('mongoose');
// create the schema
var CustomerSchema = new mongoose.Schema({
  name: String,
  created_at: String
})
// register the schema as a model
var Customer = mongoose.model('Customer', CustomerSchema);
