// email.transport.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'mobile20ema@gmail.com',
    pass: 'sral qihh sjjq ujqg'
  }
});

module.exports = transporter;