const path = require("path");
const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

// auth
router.post("/auth/login", controller.login);
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
router.post("/app/get-user", controller.getUser);
router.get("/app/get-user-page", controller.getUserPage);
router.post("/create-post", controller.createPost);
// Rooms
router.get("/rooms/enter-room", controller.enterRoom);

// Books
router.get("/books/get-genre", controller.getGenre);
router.get("/books/get-book", controller.getBook);

//
// CHROME UPDATES
//
router.post("/x-post", controller.xPost);

module.exports = router;
