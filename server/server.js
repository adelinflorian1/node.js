var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    User = require('./api/models/User'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var taskRoutes = require('./api/routes/todoListRoutes','./api/routes/userRoutes');
var userRoutes = require('./api/routes/userRoutes');

taskRoutes(app);
userRoutes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);