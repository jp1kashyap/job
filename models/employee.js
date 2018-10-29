var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var employeeSchema = new Schema({
  userid: { type: String, required: [true,'Userid is required']},
  full_name:{type:String},
  job_title:{type:String},
  job_type: { type: String},
  current_min_salary: {type:String},
  current_max_salary: {type:String},
  experience:{type:String},
  expected_min_salary: {type:String},
  expected_max_salary: {type:String},
  education_level: {type:String},
  languages:{type:String},
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
  longitude:{type:String},
  last_update:{type:String}
});

// the schema is useless so far
// we need to create a model using it
var Employee = mongoose.model('Employee', employeeSchema);

// make this available to our employee in our Node applications
module.exports = Employee;