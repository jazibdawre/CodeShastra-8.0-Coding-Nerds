var express = require("express");
var router = express.Router();
var sendMail = require("../utils//sendMail");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/sendmail", function (req, res, next) {
  const { coupon, amount, name, email } = req.body;
  return sendMail(coupon, amount, name, email, res);
});

module.exports = router;
