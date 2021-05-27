var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const api = require('./routes/api');
const apiUsers = require('./routes/users.route');

const apiSmes = require('./routes/smelist.route')

const apiSmeInfo = require('./routes/smeinfo.route');
const bodyParser = require('body-parser');
const cors = require('cors');
const connURL = 'mongodb+srv://growmoreadmin:growmoreadmin@cluster0.wb5jw.mongodb.net/GrowMoreData?retryWrites=true&w=majority';
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const mongoose = require('mongoose');
// Connect to the database
const serverSelectionTimeoutMS = 60000;
mongoose.connect(connURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: serverSelectionTimeoutMS
}, function (error, connection) {
    if (error) {
        console.log('Error connecting to: ' + connURL + '. ' + error);
    }
    else {
        console.log('Database successfully connected at ' + connURL);
        // Parsers for POST data
        app.use(bodyParser.json());

        // Setup API routes
        app.use('/api', api);
        app.use('/api/users', apiUsers);
        app.use('/api/smes', apiSmes);
        app.use('/api/smeinfo', apiSmeInfo);
    }
});

module.exports = app;
