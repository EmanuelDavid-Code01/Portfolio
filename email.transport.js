// email.transport.js
import mailgun from 'mailgun-js';

const mailgunClient = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default mailgunClient;


