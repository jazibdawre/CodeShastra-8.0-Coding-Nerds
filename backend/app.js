var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var mongoose = require('mongoose');
var cors = require('cors')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const { verifyUser } = require('./authenticate');
const otpRouter = require('./routes/otp');
const bankRouter = require('./routes/bank');

// Connection To MongoDB
mongoose.connect(process.env.DB_URL , { useNewUrlParser: true , useUnifiedTopology: true } , (err) => {
  if(err){
      console.log(err);
  }else{
      console.log("Connected To Database !!");
  }
})


// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/otp',otpRouter);
app.use('/banks',bankRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({err,success:false})
});

module.exports = app;
