var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../models/User');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config');

router.post('/register', function(req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.find({
        email:req.body.email
    }, function(err, task) {
        if (task.length===0) {
            User.create({
                    name : req.body.name,
                    email : req.body.email,
                    password : hashedPassword
                },
                function (err, user) {
                    if (err) return res.status(500).send("There was a problem registering the user.");
                    // create a token
                    var token = jwt.sign({ id: user._id }, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.status(200).send({ auth: true, token: token });
                });
        }else{
            res.status(500).send('User email already exists');
        }
    });
});

router.get('/me', function(req, res) {
    var token = req.get('authToken');
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        User.find({
            _id:decoded.id
        }, function(err, task) {
            res.json(task);
        });
    });
});

router.post('/login', function(req, res) {
    User.find({
        email:req.body.email
    }, function(err, task) {
        if (task.length===0) {
            return res.status(500).send("There was a problem logging the user. No user found");
        }else {
            var passwordIsValid = bcrypt.compareSync(req.body.password, task[0].password);
            if (!passwordIsValid) return res.status(401).send({
                auth: false,
                token: null,
                message: 'Invalid credentials'
            });

            var token = jwt.sign({id: task._id}, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({auth: true, token: token, message: 'Success'});
        }
    });
});

module.exports = router;