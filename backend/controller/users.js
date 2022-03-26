const Users = require('../models/user');
const OTP = require('../models/otp');
const passport = require('passport');
const { getJWT } = require('../authenticate');

module.exports.signUp = (req,res,next) => {
    Users.register({username: req.body.username} , req.body.password , (err,user) => {
        if(err){
            res.status(500).send({success: false , err: err})
        }else{
          if(req.body.fname){
              user.fname = req.body.fname
          }
          if(req.body.lname){
            user.lname = req.body.lname
          }
          if(req.body.phoneNo){
            user.phoneNo = req.body.phoneNo
          }
          
          user.save((err, user) => {
              if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: false , status: "Registration Unsuucessfull !!" , err: err});
                return ;
              }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true , status: "Registration Suucessfull !!" , user: user});
                return ;
              }
          })
        }
    })
}


module.exports.logInEmail = (req,res,next) => {
    passport.authenticate('local' , {session:false} , (err , user ,info) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false , status: "Login Failed !!" , err: err});
            return ;
        }
        else if(!user){
            res.statusCode = 401;
            res.setHeader('Content-Type','application/json');
            res.json({success:false , status:"Login Failed !!" , err:info});
        }
        else if(user){
            req.logIn(user , {session:false} , (err) => {
                if(err){
                    res.statusCode = 401;
                    res.setHeader('Content-Type','application/json');
                    res.json({success:false , status:"Login Failed" , err:info})
                }else{
                    Users.findOne({_id:user._id} , (err,user) => {
                        res.setHeader('Content-Type','application/json');
                        res.statusCode = 200;
                        res.json({success:true , status: "Login Successfully !!" , token:getJWT(req.user._id) , user:user});
                    })
                }
            })
        }
    })(req,res,next)
}


module.exports.logInOTP = (req,res,next) => {
    if(req.body.otp){
        OTP.findOne({phoneNo:req.body.phoneNo} , (err,otpDoc) => {
            if(err){
                res.statusCode = 500;
                res.setHeader('Content-Type','application/json');
                res.json({success:false , err:err})
            }else{
                if(!otpDoc){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','application/json');
                    res.json({success:false , status:"OTP Expired" , err:"OTP Expired!!"})
                }else{
                    if(otpDoc.otp !== req.body.otp){
                        res.statusCode = 403;
                        res.setHeader('Content-Type','application/json');
                        const err = new Error("Bad Credentials: OTP Code is Invlaid!!")
                        res.json({success:false , status:"Invalid Credentials" , err:err.message})
                    }else if(otpDoc.otp === req.body.otp){
                        OTP.findByIdAndDelete(otpDoc._id , (err,resp) => {
                            if(err){
                                console.log(err)
                            }
                        })
                        Users.findOne({phoneNo:req.body.phoneNo} , (err,user) => {
                            if(err){
                                res.statusCode = 500;
                                res.setHeader('Content-Type','application/json');
                                res.json({success:false , status:"Bad Request" , err:err})
                            }else{
                                if(user){
                                    res.statusCode = 200;
                                    res.setHeader('Content-Type','application/json');
                                    res.json({success:true , status:"Verified" , msg:"Logged In Successfully!!" , token:getJWT(user._id) , user:user})
                                }
                            }
                        })
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
}


module.exports.getAlluser = (req,res,next) => {
    Users.find({} , (err,users) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false , status:"Bad Request"})
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true , users:users});
        }
    })
}

module.exports.updateUser = (req,res,next) => {
    Users.findByIdAndUpdate(req.user._id , req.body , {new:true} , (err,user) => {
        if(err){
          console.log(err)
          res.statusCode = 500;
          res.setHeader('Content-Type','application/json');
          res.json({success:false , status:"Bad Request"})
        }else{
          if(!user){
            let err = new Error("Profile Not Found!!")
            res.statusCode = 404;
            res.setHeader('Content-Type','application/json');
            res.json({success:false , status:"Bad Request",err:err})
          }else{
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true , status:"User Updated" , status:"User updated Successfully!!" , user:user});
          }
        }
    })
}

module.exports.deleteAll = (req,res,next) => {
    Users.deleteMany({}, (err,resp) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false , status:"Bad Request"})
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true , status:"User Updated" , status:"Users Deleted Successfully!!" , resp:resp});
        }
    })
}

module.exports.deleteOne = (req,res,next) => {
    if(!req.params.id){
        let err = new Error("User ID missing")
        res.statusCode = 403;
        res.setHeader('Content-Type','application/json');
        res.json({success:false , status:"Bad Request", err:err})
        return
    }
    Users.findByIdAndDelete(req.params.id , (err,resp) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false , status:"Bad Request"})
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true , status:"User Updated" , status:"User Deleted Successfully!!" , resp:resp});
        }
    })
}