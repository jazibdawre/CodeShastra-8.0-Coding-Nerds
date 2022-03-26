const express = require('express')
const Users = require('../models/user');
const {getJWT, verifyToken, verifyUser} = require('../authenticate');
const path = require('path');



const bankRouter = express.Router();
const { getAllBank, getBank, addBankCoupons, addBanks } = require('../controller/bank');



bankRouter.get('/' , getAllBank)
bankRouter.get('/:name' , getBank)
bankRouter.put('/coupons/add' , addBankCoupons)
bankRouter.post('/add' , addBanks)

module.exports = bankRouter;