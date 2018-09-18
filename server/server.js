var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    User = require('./api/models/User'),
    Post = require('./api/models/Post'),
    Comment = require('./api/models/Comment'),
    bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');
var config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

var AuthController = require('./api/controllers/authController');
app.use(AuthController);

app.use(function (req, res, next) {
    jwt.verify(req.get('authToken'), config.secret, function(err, decoded) {
        if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
        next('route')
    });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/userRoutes');
var postRoutes = require('./api/routes/postRoutes');
var commentRoutes = require('./api/routes/commentRoutes');

commentRoutes(app);
postRoutes(app);
userRoutes(app);

app.listen(port);