const path = require("path");
const express = require("express");
const router = express.Router();
const controller = require("../controllers");

console.log("router file");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

// Auths
router.post("/auth/login", controller.login);
router.post("/auth/get-user", controller.getUser);
router.post("/auth/signup", controller.signup);
router.post("/auth/verify-email", controller.verifyEmail);
router.post("/auth/verify-username", controller.verifyUsername);
router.post("/auth/verify-otp", controller.verifyOTP);
router.post("/auth/create-password", controller.createPassword);
router.post("/auth/update-username", controller.updateUsername);
router.post("/auth/update-profile-photo-image", controller.updateProfilePhoto);
router.post("/auth/generate-recovery-code", controller.generateRecoveryCode);

// App
router.get("/app", controller.getApp);
router.get("/app/getProfile", controller.getProfile);

// Rooms
router.get("/rooms/enter-room", controller.enterRoom);


// Books
router.get('/books/get-genre', controller.getGenre)
module.exports = router;
