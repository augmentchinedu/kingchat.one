const { MailtrapClient } = require("mailtrap");

const { User } = require("../db/models");

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "noreply@kingchat.one",
  name: "King Chat",
};

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
  user.save();

  return pin;
}

function sendVerificationEmail(user) {
  console.log("Generating Verification Code", user.pin);

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

function sendRecoveryCode(email, code) {
  console.log("Sending Recovery Code", code);

  const recipients = [
    {
      email,
    },
  ];

  client.send({
    from: sender,
    to: recipients,
    subject: "Recovery Code",
    text: `Your Recovery code is ${code}.`,
    category: "Password Recovery",
  });

  return true;
}

module.exports = { authenticate, sendRecoveryCode };
