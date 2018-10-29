var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://skilldosti:skilldosti1dba@ds049631.mlab.com:49631/skill-dosti',{
  useCreateIndex: true,
  useNewUrlParser: true
});
var session = require('express-session');
var flash = require('express-flash');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//session and cookies
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave : false,
    saveUninitialized : false,
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
//if not use bin/www also change package.json start app.js
app.listen(3000, function(){
    console.log("info",'Server is running at port : ' + 3000);
});
////if  use bin/www remove app.listen also change package.json start ./bin/www




module.exports = app;
