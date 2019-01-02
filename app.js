const express= require('express');
const mongoose= require('mongoose');
mongoose.Promise= global.Promise;
const expressValidator= require('express-validator');
const session= require('express-session');
const cookieParser= require('cookie-parser');
const bodyParser= require('body-parser');
const passport = require('passport');

let user= require('./routes/users');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/comRide');

const app= express();
// middlewares
// express session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
// cookie parser middleware
app.use(cookieParser())
// connect flash
// app.configure(function() {
//   app.use(express.cookieParser('keyboard cat'));
//   app.use(express.session({ cookie: { maxAge: 60000 }}));
//   app.use(flash());
// });
//connect flash
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//express validation middleware
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));
  // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// passport middleware
app.use(passport.initialize());
app.use(passport.session());
// creating routes
app.use('/user', user);


// app connection
app.listen(port, ()=>{
    console.log(`server has statrted at ${port}`)
});