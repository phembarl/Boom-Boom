const mongoose = require('mongoose');

let driverSchema= mongoose.Schema({
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
    carType: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    },

    plate: {
        type: String,
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

let driver= module.exports= mongoose.model('driver', driverSchema);
