var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon')
var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');
var mainRouter = require('./routes/main');
var infoRouter = require('./routes/information');
var info1Router = require('./routes/information1');
var reviewRouter = require('./routes/review');
var review1Router = require('./routes/review1');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'logo.png')))


var options = {
  host: process.env.DB_HOST,
  port: 1306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE
};


var sessionStore = new MySQLStore(options);

app.use(session({
  HttpOnly:true,
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: true     // 세션이 필요하기 전까지는 세션을 구동시키지 않는다(true)
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);
app.use('/main', mainRouter);
app.use('/info', infoRouter);
app.use('/info1', info1Router);
app.use('/review', reviewRouter);
app.use('/review1', review1Router);

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

module.exports = app;
