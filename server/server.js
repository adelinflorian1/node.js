var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    User = require('./api/models/User'),
    Post = require('./api/models/Post'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/userRoutes');
var postRoutes = require('./api/routes/postRoutes');

postRoutes(app);
userRoutes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);