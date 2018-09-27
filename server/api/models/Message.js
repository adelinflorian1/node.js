var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    text: {
        type: String,
        required: 'Kindly enter the text'
    },
    timestamp: {
        type: String,
        required: 'Kindly enter the timestamp'
    }
});

module.exports = mongoose.model('Messages', MessageSchema);
