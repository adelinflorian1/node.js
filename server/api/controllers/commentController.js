var mongoose = require('mongoose');
var comment = mongoose.model('Comments');

exports.get_comment_by_post_id = function(req, res) {
    comment.find({
        postId:req.params.commentId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_comment = function(req, res) {
    var new_comment = new comment(req.body);
    new_comment.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_a_comment = function(req, res) {
    comment.remove({
        _id: req.params.commentId
    }, function(err, comment) {
        if (err)
            res.send(err);
        res.json({ message: 'comment successfully deleted' });
    });
};