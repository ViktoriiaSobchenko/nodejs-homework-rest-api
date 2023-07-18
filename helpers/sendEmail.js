const nodemailer = require("nodemailer");
require("dotenv").config();

const {FREEMAIL_API_KEY} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
        user: "vsobchenko@ukr.net",
        pass: FREEMAIL_API_KEY,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async(data) => {
  const email = {...data, from: "vsobchenko@ukr.net"};
  await transport.sendMail(email);
  return true;    
};

module.exports = sendEmail;

// const email = {
//     to: "v.sobchenko@meta.ua",
//     from: "vsobchenko@ukr.net",
//     subject: "Test email",
//     html: "<p><strong>Test email</strong> from localhost:3000</p>"
// };

// transport.sendMail(email)
// .then(() => console.log("Email send success"))
// .catch(error => console.log(error.message));