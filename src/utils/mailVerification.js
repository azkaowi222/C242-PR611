const nodemailer = require("nodemailer");
require("dotenv").config();

const trasnporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendMail = async (receiver, username, verifCode) => {
  try {
    const info = await trasnporter.sendMail({
      from: "azkaowi222@gmail.com",
      to: receiver,
      subject: "Email Verification Code",
      text: "Verification",
      html: `<div>
                  <h3>Hello, ${username}</h3><br>
                  <p>Your verification code: ${verifCode}</p>
                  <p>This code valid for 15 minutes</p>
              </div>`,
    });
    console.log(`Mail has been send from ${info.messageId}`);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = sendMail;
