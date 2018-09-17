var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name'
    },
    email: {
        type: String,
        required: 'Kindly enter the email'
    },
    password: {
        type: String,
        required: 'Kindly enter the password'
    }
});

module.exports = mongoose.model('Users', UserSchema);