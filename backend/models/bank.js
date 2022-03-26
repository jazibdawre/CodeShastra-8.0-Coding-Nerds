const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bankSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    coupons: [{
        imgURL: {
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

module.exports = mongoose.model("Bank" , bankSchema);