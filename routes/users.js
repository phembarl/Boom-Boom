const express= require('express');
const router= express.Router();
const _= require('lodash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { check } = require('express-validator/check');

let User= require('../models/users');
// 
router.get('/',(req,res,next)=>{
    res.status(200).send('welcome')
})
//Users home route

// login page
router.get('/login', (req,res,next)=>{
    res.send('login')
})
//  User registration route

router.get('/registration', (req,res,next)=>{
    res.send('registration form')
});
// an array that checks if email and phone number already exist
let arrayCheck=[ check('email').custom(value => {
    console.log(value)
    return User.findOne({email:value}).then(user => {
    if (user) {
        return Promise.reject('E-mail already in use');
      }
    });
  }), check('number').custom(value => {
    console.log(value)
    return User.findOne({number:value}).then(user => {
    if (user) {
        return Promise.reject('Phone Number already in use');
      }
    });
  })]

// User registration post request
router.post('/register',arrayCheck, (req,res,next)=>{
    let body= _.pick(req.body,['firstname','lastname','email','number','password']);
   console.log(body)

    // validation
    req.checkBody('firstname','Firstname is required').notEmpty();
    req.checkBody('lastname','Lastname is required').notEmpty();
    req.checkBody('email','email is required').notEmpty();
    req.checkBody('email','a valid email is required').isEmail();
    // validating if user email already exists
    
    req.checkBody('password','password is required').notEmpty();
    req.checkBody('password','minimun password length is 5').isLength({min:5});
    req.checkBody('password2','Password didnt match').equals(req.body.password);

    let errors= req.validationErrors()

    if (errors) {
        res.status(400).send(errors)
    }
    else {
        let newUser= new User(body);
        User.registerUser(newUser,(err,user)=>{
            if (err) res.status(400).send(err)
            res.redirect('/user/login')
        });
    }
    
});


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    (username, password, done)=> {
      User.getUserUsername(username, (err, user)=> {
          console.log(user)
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        User.comparePassword(password,user.password, (err,isMatch)=>{
            if (err) throw err
            if (isMatch) {
                return done(null,user)
            } else {
                return done(null, false, { message: 'Incorrect password' })
            }
        })
      });
    }
  ));
// passport session
passport.serializeUser((user, done)=> {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done)=> {
    User.getUserById(id, (err, user)=> {
      done(err, user);
    });
  });
// post login route

router.post('/login', (req,res,next)=>{
    passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/user/login',
    failureFlash: true 
})(req,res,next);
});
 
// logout route
router.get('/logout', (req,res,next)=>{
    req.logout();
    res.status(200).send('logged out successful')
})
module.exports= router;