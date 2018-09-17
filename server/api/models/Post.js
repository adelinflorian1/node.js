var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    authorId: {
        type: String,
        required: 'Need authorId',
    },
    images:{
        type:String,
        default: '',
    },
    time:{
        type:Number,
        default: Date.now,
    },
    type:{
        type: String,
        default: 'Photo',
    },
    text:{
        type:String,
        default: '',
    },
    commentsNumber:{
        type:Number,
        default: 0,
    },
    authorName:{
        type:String,
        required: 'Need authorName'
    },
});

module.exports = mongoose.model('Posts', PostSchema);