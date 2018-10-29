var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var transactionSchema = new Schema({
  userid: { type: String, required: [true,'Userid is required']},
  packageid: { type: String, required: [true,'Please fill package Id']},
  package_name: { type: Number, required: [true,'Please fill package name']},
  amount: { type: Number, required:[true,'Please fill package amount']},
  status: { type: Number, required:[true,'Define status of transaction']},
  payment_type: { type: Number, required:[true,'Define type of payment'] },
  payment_date: Date
});

// the schema is useless so far
// we need to create a model using it
var Transaction = mongoose.model('Transaction', transactionSchema);

// make this available to our Transaction in our Node applications
module.exports = Transaction;