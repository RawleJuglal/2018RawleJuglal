let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let passport = require('passport');
let mongoUri = '';

require('./models/Users');
require('./models/Webprojects');
require('./models/Filmprojects');
require('./models/Blogs');
require('./models/Comments');
require('./config/passport');

let users = require('./api/users');
let webprojects = require('./api/webprojects');
let filmprojects = require('./api/filmprojects');
let blogs = require('./api/blogs');
let comments = require('./api/comments');
let index = require('./routes/index');
let vendors = require('./routes/vendors');

let app = express();

if (!process.env.MONGODB_URI) {
  mongoUri = 'mongodb://heroku_4bgk8s46:98rl2rfojlen6bnvicco7va92k@ds141657.mlab.com:41657/heroku_4bgk8s46'
} else {
  mongoUri = process.env.MONGODB_URI
}

mongoose.connect(mongoUri);

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', dbCallback)

function dbCallback() {
  console.log('db connection made!')
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());




app.use('/', index);
app.use('/lib', vendors);
app.use('/users', users);
app.use('/webprojects', webprojects);
app.use('/filmprojects', filmprojects);
app.use('/blogs', blogs);
app.use('/comments', comments);
app.use('/dist', express.static(__dirname + '/build'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
