var mongoose = require('mongoose');
require('mongoose-type-email');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: { type: String, required: [true,'Username is required'],unique:true},
  password: { type: String, required: [true,'Password is required'],minlength:[6,'Password length is greater than 6 digits']},
  email: { type: mongoose.SchemaTypes.Email, required: [true,'PLease fill valid email'],unique:true},
  specialism: { type: String, required:[true,'Specialism is required']},
  phone: { type: String, required:[true,'Phone is required'],minlength:[10,'Mobile number not less than 10 digits'],maxlength:[13,'Mobile number is not greater than 13 characters']},
  role: { type: String, required:[true,'Plesae chhose your role'] },
  register_date: Date
});

userSchema.plugin(uniqueValidator,{ message: 'expected {PATH} is already used.' });
// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;