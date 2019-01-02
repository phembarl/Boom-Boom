const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');

let userSchema= mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 1
    },
    number: {
        type: Number,
        trim: true,
        required: true,
        unique: true,
        minlength: 1
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 5
    },
    password2: {
        type: String,
        trim: true,
        minlength: 5
    }

});

let User= module.exports= mongoose.model('User', userSchema);

// module.exports.findByEmail= (email)=>{
//     let quary={email};
//     User.findOne(quary)
// };

module.exports.registerUser= (newUser,callback)=>{
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password, salt, (err,hash)=>{
            newUser.password= hash;
            newUser.save(callback)
        })
    })
};

module.exports.getUserUsername= (username,callback)=>{
    let quary={email:username};
    User.findOne(quary,callback)
};

module.exports.comparePassword= (password,hash,callback)=>{
    bcrypt.compare(password,hash,(err,isMatch)=>{
        if (err) throw err
        callback(null,isMatch)
    });
};

module.exports.getUserById= (id,callback)=>{
    User.findById(id,callback)
}
