const nodemailer = require("nodemailer");

const sendMail = (coupon, amount, name, email, res) => {
  const mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: email,
    subject: "You're Welcome 🎁",
    html: "You have been gifted a coupon code " + coupon + " for " + amount + " by " + name,
  };

  mailer.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      return res.sendStatus(400);
    } else {
      return res.sendStatus(200);
    }
  });
};

module.exports = sendMail;
