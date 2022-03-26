const Users = require('../models/user');

module.exports.getCard = (req,res,next) => {
    if(!req.params.bankName || !req.params.cardNumber){
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false , status: "Failed to Fetch Card!!" , err: new Error("Invalid Parameters")});
        return
    }
    Users.findOne({_id: req.user._id} , (err,user) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false , status: "Failed to Delete Card!!" , err: err});
        }
        let card = user.cards.filter(card => card.bankName == req.params.bankName && req.params.cardNumber == card.cardNumber)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true , status: "Cards Deleted Sucessfully !!" , card: card});
    })
}

module.exports.getAllCards = (req,res,next) => {
    Users.findOne({_id: req.user._id} , (err,user) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false , status: "Failed to Add Cards!!" , err: err});
            return
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true , status: "Cards Fetched Sucessfully !!" , cards: user.cards});
    })
}

module.exports.addCards = (req,res,next) => {
    if(req.body.cards){
        Users.findOne({_id: req.user._id} , (err,user) => {
            if(err){
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: false , status: "Failed to Add Cards!!" , err: err});
            }
            let cards = req.body.cards
            user.cards = [...user.cards,...cards]
            user.save((err, user) => {
                if (err) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.json({success: false , status: "Failed to Add Cards!!" , err: err});
                  return ;
                }else{
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.json({success: true , status: "Cards Appended Sucessfully !!" , user: user});
                  return ;
                }
            })
        })
    }else{
        res.statusCode = 403;
        res.setHeader('Content-Type','application/json');
        const err = new Error("Cards not send !!")
        res.json({success:false , status:"Empty Credentials" , err:err.message})
    }
}


module.exports.deleteAllCards = (req,res,next) => {
    Users.findOne({_id: req.user._id} , (err,user) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false , status: "Failed to Add Cards!!" , err: err});
        }
        user.cards = []
        user.save((err, user) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: false , status: "Failed to Delete Cards!!" , err: err});
                return ;
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true , status: "Cards Deleted Sucessfully !!" , user: user});
                return ;
            }
        })
    })
}


module.exports.deleteCard = (req,res,next) => {
    if(!req.params.bankName || !req.params.cardNumber){
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false , status: "Failed to Delete Cards!!" , err: new Error("Invalid Parameters")});
        return
    }
    Users.findOne({_id: req.user._id} , (err,user) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false , status: "Failed to Delete Card!!" , err: err});
        }
        user.cards = user.cards.filter(card => card.bankName != req.params.bankName && req.params.cardNumber != card.cardNumber)
        console.log(user.cards)
        user.save((err, user) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: false , status: "Failed to Delete Card!!" , err: err});
                return ;
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true , status: "Cards Deleted Sucessfully !!" , user: user});
                return ;
            }
        })
    })
}