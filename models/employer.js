var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var employerSchema = new Schema({
  userid: { type: String, required: [true,'Userid is required']},
  company_name: { type: String},
  since: {type:String},
  team_size: {type:String},
  specialism:{type:String},
  categories:{type:String},  
  description:{type:String},
  facebook:{type:String},
  twitter:{type:String},
  google:{type:String},
  linkedin:{type:String},
  phone:{type:String},
  email:{type:String},
  website:{type:String},
  country:{tyep:String},
  city:{type:String},
  address:{type:String},
  latitude:{type:String},
  laditude:{type:String},
  last_update:{type:String}
});

// the schema is useless so far
// we need to create a model using it
var Employer = mongoose.model('Employer', employerSchema);

// make this available to our employer in our Node applications
module.exports = Employer;