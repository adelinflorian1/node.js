var mongoose = require('mongoose');
var Message = mongoose.model('Messages');

exports.list_all_messages = function(req, res) {
    Message.find({}, function(err, task) {
        if (err)
            res.status(404).send(err);
        res.json(task);
    });
};

exports.create_a_message = function(req, res) {
    console.log(req.body);
    var new_message = new Message(req.body);
    
    new_message.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
