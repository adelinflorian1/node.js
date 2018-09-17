var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    authorId: {
        type: String,
        required: 'Need authorId',
    },
    time:{
        type:Number,
        default: Date.now,
    },
    text:{
        type:String,
        default: '',
    },

    postId: {
        type: String,
        required: 'Need postId',
    },

    authorName:{
        type:String,
        required: 'Need authorName'
    },
    authorAvatar:{
        type:String,
        default: ''
    },
});

module.exports = mongoose.model('Comments', CommentSchema);