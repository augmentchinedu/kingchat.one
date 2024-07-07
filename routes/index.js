const path = require("path");
const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

router.get("/api/app/:domain", controller.getApp);
router.post("/api/app/register", controller.register);
router.post("/api/update-client", (req, res) => {
  console.log(req.body);
  res.send("Ok");
});

router.all("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "client", "dist", "spa", "index.html")
  );
});

module.exports = router;
