var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var packageSchema = new Schema({
  title: { type: String, required: [true,'Title of package is required']},
  price: { type: String, required: [true,'Please define Price of package']},
  validity: { type: Number, required: [true,'PLease fill validity of package']},
  job_limit: { type: Number, required:[true,'Define Job limit in package']},
  featured_limit: { type: Number, required:[true,'Plaese define featured job limit']},
  display_limit: { type: Number, required:[true,'Plesae define job display limit'] },
  register_date: Date
});

// the schema is useless so far
// we need to create a model using it
var Package = mongoose.model('Package', packageSchema);

// make this available to our package in our Node applications
module.exports = Package;