var mongoose = require('mongoose');
var Post = mongoose.model('Posts');

exports.list_all_posts = function(req, res) {
    Post.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.get_post_by_id = function(req, res) {
    Post.find({
        _id:req.params.postId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_post = function(req, res) {
    var new_Post = new Post(req.body);
    new_Post.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_a_post = function(req, res) {
    Post.remove({
        _id: req.params.postId
    }, function(err, post) {
        if (err)
            res.send(err);
        res.json({ message: 'Post successfully deleted' });
    });
};