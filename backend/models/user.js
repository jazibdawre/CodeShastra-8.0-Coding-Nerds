const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
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
  transactions: [
    {
      title: {
        type: String,
        require: true,
      },
      price: {
        type: Number,
        require: true,
      },
      category: {
        type: String,
        enum: ["Travel", "Electronics", "Finance", "E-Commerce"],
        require: true,
      },
    },
  ],
  cards: [
    {
      bankName: {
        type: String,
        require: true,
      },
      cardNumber: {
        type: String,
        require: true,
      },
      type: {
        type: String,
        require: true,
        default: "Debit",
      },
      expiry:{
        type: String,
      },
      cvv:{
        type: String,
      }
    },
  ],
  coupons: [
    {
      imgUrl: {
        type: String,
      },
      category: {
        type: String,
      },
      code: {
        type: String,
      },
      title: {
        type: String,
      },
      discount: {
        type: Number,
      },
      price: {
        type: Number,
      },
      description: {
        type: String,
      },
      expiry: {
        type: Date,
      },
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
