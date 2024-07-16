const { MailtrapClient } = require("mailtrap");

const { User } = require("../db/models");

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

//
// Authentication Functions
//
async function authenticate(user) {
  let pin = await generateAndSaveOTP(user._id);
  await sendVerificationEmail({
    name: user.displayname,
    email: user.email,
    pin,
  });
}

async function generateAndSaveOTP(uid) {
  let pin = Math.floor(100000 + Math.random() * 900000);

  let user = await User.findById(uid);
  user.auth.otp = pin;
  console.log(user, pin);
  user.save();

  return pin;
}

function sendVerificationEmail(user) {
  console.log("Generating Verification Code", user.pin);
  const sender = {
    email: "noreply@kingchat.one",
    name: "King Chat Desk",
  };

  const recipients = [
    {
      email: user.email,
    },
  ];

  client.send({
    from: sender,
    to: recipients,
    subject: "Verification Code",
    text: `Your Verification code is ${user.pin}.`,
    category: "Email Verification",
  });

  return;
}

module.exports = { authenticate };
