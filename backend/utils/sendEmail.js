const nodemailer = require('nodemailer')

const sendEmail = async options => {
 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user:'aubinjaja@gmail.com',
   pass: 'aubinjaja123',
  },
 })

 const message = {
  from: `${process.env.FROM_EMAIL}`,
  to: options.email,
  subject: options.subject,
  text: options.message,
 }

 transporter.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


}


/** /
 * const nodemailer = require("nodemailer");

var sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bluetechstartup007@gmail.com",
    pass: "March_2021",
  },
});

var mailInfo = {
  from: "bluetechstartup007@gmail.com",
  to: "bluetechtest007@gmail.com",
  subject: "Sending email using NodeJS",
  text: `Please check new client on pending...`,
};


*/ 
module.exports = sendEmail
