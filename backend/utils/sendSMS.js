const twilio = require('twilio');

const client = new twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendSMS = async (to, body) => {
  await client.messages.create({
    body,
    from: process.env.TWILIO_PHONE,
    to,
  });
};

module.exports = sendSMS;
