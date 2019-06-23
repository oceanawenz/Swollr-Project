require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SI;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14804053390',
     to: proccess.env.MY_PHONE_NUMBER
   })
  .then(message => console.log(message.sid));