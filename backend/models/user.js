const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    phoneNo: {
        type: Number,
    },
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    cards: [{
        bankName: {
            type: String,
            require: true,
        },
        cardNumber:{
            type: String,
            require: true
        },
        type: {
            type: String,
            require: true,
            default: "Debit"
        }
    }],
    coupons: [{
        link: {
            type: String
        },
        code: {
            type: String
        },
        title: {
            type: String
        },
        discount: {
            type: Number
        },
        price: {
            type: Number
        },
        description: {
            type: String
        },
        expiry: {
            type: Date
        }
    }]
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User" , userSchema);