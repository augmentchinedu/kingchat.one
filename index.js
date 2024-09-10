require("dotenv").config();
const core = require("./core");

(async () => {
  const http = require("http");
  const path = require("path");
  const cors = require("cors");
  const morgan = require("morgan");
  const express = require("express");
  const { Server } = require("socket.io");

  await require("./db").init();
  await core.init();
  const router = require("./routes");
  const { initIO } = require("./io");

  const app = express();

  const server = http.createServer(app);

  // App

  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  initIO(io);

  // HTTPS Redirect
  app.use((req, res, next) => {
    if (process.env.NODE_ENV == "production") {
      if (req.headers["x-forwarded-proto"] !== "https") {
        return res.redirect(`https://${req.headers.host}${req.url}`);
      }

      if (req.hostname === "www.kingchat.one") {
        return res.redirect(301, "https://kingchat.one" + req.originalUrl);
       }
    }

    next();
  });

  app.set("trust proxy", true);

  // Middlewares
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "client", "dist")));

  // Router
  app.use("/api", router);
  app.use("/chrome", router);

  // Catch All
  app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, console.info(`Server Started @ ${PORT}`));
})();
