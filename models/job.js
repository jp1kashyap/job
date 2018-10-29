var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var jobSchema = new Schema({
  userid: { type: String, required: [true,'Userid is required']},
  description:{type:String,required:[true,'Description of job is required']},
  categories:{type:String,required:[true,'Categories is required']},
  job_type: { type: String,required:[true,'Please select Job type']},
  offered_min_salary:{type:String,required:[true,'Please choose offered minimum salary']},
  offered_max_salary:{type:String,required:[true,'Please choose offered maximum salary']},
  career_level: {type:String,required:[true,'Please select career level']},
  experience: {type:String,required:[true,'Please choose experience you required']},
  gender:{type:String,required:[true,'Please choose gender you required']},
  industry:{type:String,required:[true,'Please define your industry']},
  qualification:{type:String,required:[true,'Please define required qualification']},
  deadline_date:{tyep:String,required:[true,'Please set a deadline date']},
  skills:{type:String,required:[true,'Please choose skills']},
  country:{tyep:String,required:[true,'Country is required']},
  city:{type:String,required:[true,'City is required']},
  address:{type:String,required:[true,'Address is required']},
  latitude:{type:String},
  laditude:{type:String},
  post_date:{type:String}
});

// the schema is useless so far
// we need to create a model using it
var Job = mongoose.model('Job', jobSchema);

// make this available to our job in our Node applications
module.exports = Job;