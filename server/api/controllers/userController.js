var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
    User.find({}, function(err, task) {
        if (err)
            res.status(404).send(err);
        res.json(task);
    });
};

exports.get_user_by_id = function(req, res) {
    User.find({
        _id:req.params.userId
    }, function(err, task) {
        if (err)
            res.status(404).send(err);
        res.json(task);
    });
};

exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);
    User.find({
        email:new_user.email
    }, function(err, task) {
        if (task.length===0) {
            new_user.save(function (err, task) {
                if (err)
                    res.send(err);
                res.json(task);
            });
        }else{
            res.status(500).send('User email already exists');
        }
    });
};

exports.delete_a_user = function(req, res) {
    User.remove({
        _id: req.params.userId
    }, function(err, user) {
        if (err)
            res.status(404).send(err);
        res.json({ message: 'User successfully deleted' });
    });
};