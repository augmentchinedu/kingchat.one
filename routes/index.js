const path = require("path");
const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

// Auths
router.post("/api/auth/login", controller.login);
router.post("/api/auth/get-user", controller.getUser);
router.post("/api/auth/signup", controller.signup);
router.post("/api/auth/verify-email", controller.verifyEmail);
router.post("/api/auth/verify-username", controller.verifyUsername);
router.post("/api/auth/verify-otp", controller.verifyOTP);
router.post("/api/auth/create-password", controller.createPassword);
router.post("/api/auth/update-username", controller.updateUsername);
router.post(
  "/api/auth/update-profile-photo-image",
  controller.updateProfilePhoto
);
router.post(
  "/api/auth/generate-recovery-code",
  controller.generateRecoveryCode
);
// Rooms
router.get("/api/rooms/enter-room", controller.enterRoom);

// Catch All
router.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

module.exports = router;
