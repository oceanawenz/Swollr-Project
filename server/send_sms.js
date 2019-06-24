require('dotenv').config();


const {TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, MY_PHONE_NUMBER} = process.env

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14804053390',
     to: MY_PHONE_NUMBER
   })
  .then(message => console.log(message.sid));