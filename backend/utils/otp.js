const axios = require('axios');
const otpGenerator = require('otp-generator');

const sendOTP = async(msgType , phoneNo) => {
    baseUrl = "https://www.fast2sms.com/dev/bulkV2?";
    const auth = "authorization=" + process.env.FAST2SMS_TOKEN;
    route = "&route=v3";
    senderId = "&sender_id=" + process.env.SENDERID;
    const number= "&numbers=" + phoneNo;
    let message = "";
    message= "&message=You have been provided with a coupon for Rs.1000 by Jay\n\nThanks&Regards\nTeam Coding Nerds";
    const url= baseUrl+auth+route+senderId+message+number;
    try{
        await axios.get(url);
        // return otp
    }catch(err){
        console.log(err);
        return null;
    }
}

module.exports = {sendOTP};