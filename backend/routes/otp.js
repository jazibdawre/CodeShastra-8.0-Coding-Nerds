const express = require('express');
const {sendOTP} = require('../utils/otp')
const Otps = require('../models/otp');

const otpRouter = express.Router();

otpRouter.post('/generateOTP', (req,res,next) => {
    if(req.body.phoneNo){
        const generator = async function generateOTP(){
            const msg = "&You have been sent a coupoun for Rs. "+ req.body.amount + " by " + req.user.fname + "\nCoupoun Code: " + req.body.couponCode + "\nThanks and Regards\nTeam Coding Nerds"
            const otp = await sendOTP(msg , req.body.phoneNo);
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true , status:"Verified" , msg:"Number Verfied Successfully!!"})  
        }
        generator()
    }else{
        res.statusCode = 403;
        res.setHeader('Content-Type','application/json');
        const err = new Error("Bad Credentials: Number is required !!")
        res.json({success:false , err:err.message}) 
    }
})

otpRouter.post('/verify', (req,res,next) => {
    if(req.body.otp){
        Otps.findOne({phoneNo:req.body.phoneNo} , (err,otpDoc) => {
            if(err){
                res.statusCode = 500;
                res.setHeader('Content-Type','application/json');
                res.json({success:false , err:err})
            }else{
                if(!otpDoc){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','application/json');
                    res.json({success:false , status:"OTP Expired" , err:"OTP Validity Expired!!"})
                }else{
                    if(otpDoc.otp !== req.body.otp){
                        res.statusCode = 403;
                        res.setHeader('Content-Type','application/json');
                        const err = new Error("Bad Credentials: OTP Code is Invlaid!!")
                        res.json({success:false , status:"Invalid Credentials" , err:err})
                    }else if(otpDoc.otp === req.body.otp){
                        Otps.findByIdAndDelete(otpDoc._id , (err,resp) => {
                            if(err){
                                console.log(err)
                            }
                        })
                        
                        res.statusCode = 200;
                        res.setHeader('Content-Type','application/json');
                        res.json({success:true , status:"Verified" , msg:"Number Verfied Successfully!!"})  
                    }
                }
            }
        })
    }else{
        res.statusCode = 403;
        res.setHeader('Content-Type','application/json');
        const err = new Error("Bad Credentials: OTP Code is required !!")
        res.json({success:false , status:"Empty Credentials" , err:err.message})
    }
})

module.exports = otpRouter;