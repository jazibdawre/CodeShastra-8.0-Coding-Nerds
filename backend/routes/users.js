const express = require('express')
const {verifyUser} = require('../authenticate');
const path = require('path');



const userRouter = express.Router();

const { signUp, logInEmail, logInOTP, updateUser, getAlluser, deleteAll, deleteOne, getUser, getAllCoupons } = require('../controller/users');
const { addCards, deleteAllCards, deleteCard, getAllCards, getCard } = require('../controller/cards');

userRouter.get('/all',  verifyUser, getAlluser)
userRouter.get('/me',  verifyUser, getUser)
userRouter.get('/getAllCoupon', verifyUser , getAllCoupons)
userRouter.post('/signUp', signUp)
userRouter.post('/login/email', logInEmail)
userRouter.post('/login/otp', logInOTP)
userRouter.put('/updateProfile' , verifyUser , updateUser)
userRouter.delete('/deleteAll' , verifyUser , deleteAll)
userRouter.delete('/delete/:id' , verifyUser , deleteOne)

userRouter.get('/cards/', verifyUser , getAllCards)
userRouter.get('/cards/:bankName/:cardNumber', verifyUser , getCard)
userRouter.put('/cards/add', verifyUser , addCards)
userRouter.delete('/cards', verifyUser , deleteAllCards)
userRouter.delete('/cards/:bankName/:cardNumber', verifyUser , deleteCard)


module.exports = userRouter;