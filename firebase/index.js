const admin = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = require("../keys/kingchatone.json");

const app = admin.initializeApp({
  credential: admin.cert(serviceAccount),
});

const auth = getAuth(app);

module.exports = { auth, app };
