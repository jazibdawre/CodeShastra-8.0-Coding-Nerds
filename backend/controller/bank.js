const Bank = require('../models/bank')

module.exports.getBank = async (req,res,next) => {
    Bank.findOne({name: req.params.name}, (err,bank) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false , status:"Failed to Fetched Bank" , err:err})
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true , status: "Bank Fetched Sucessfully !!" , bank: bank});
        }
    })
}

module.exports.getAllBank = async (req,res,next) => {
    Bank.find({}, (err,banks) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false , status:"Failed to Fetched Banks" , err:err})
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true , status: "Banks Fetched Sucessfully !!" , banks: banks});
        }
    })
}

module.exports.addBanks = async (req,res,next) => {
    if (!req.body.banks){
        res.statusCode = 403;
        res.setHeader('Content-Type','application/json');
        const err = new Error("Bank List not send !!")
        res.json({success:false , status:"Empty Credentials" , err:err.message})
    }else{
        let banks = req.body.banks
        let _banks = []
        for (let i = 0 ; i < banks.length ; i++){
            let BANK = await Bank.create(banks[i])
            _banks.push(BANK)
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true , status: "Banks Appended Sucessfully !!" , banks: _banks});
    }
}

module.exports.addBankCoupons = async (req,res,next) => {
    if (!req.body.bankName || !req.body.coupons){
        res.statusCode = 403;
        res.setHeader('Content-Type','application/json');
        const err = new Error("Empty Details send !!")
        res.json({success:false , status:"Empty Credentials" , err:err.message})
    }else{
        Bank.findOne({name: req.body.bankName} , (err,bank) => {
            if(err){
                res.statusCode = 500;
                res.setHeader('Content-Type','application/json');
                res.json({success:false , status:"Failed to Add Coupons" , err:err})
            }else if(bank){
                bank.coupons = [...bank.coupons,...req.body.coupons]
                bank.save((err, user) => {
                    if (err) {
                      res.statusCode = 500;
                      res.setHeader('Content-Type', 'application/json');
                      res.json({success: false , status: "Failed to Add Coupons!!" , err: err});
                      return ;
                    }else{
                      res.statusCode = 200;
                      res.setHeader('Content-Type', 'application/json');
                      res.json({success: true , status: "Coupoun Appended Sucessfully !!" , bank: bank});
                      return ;
                    }
                })
            }else{
                res.statusCode = 401;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: false , status: "Bank not found!!" , err: new Error('Bank not found')});
                return;
            }
        })
    }
}