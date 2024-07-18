require("dotenv").config();

const http = require("http");
const path = require("path");
const { init } = require("./db");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const { Server } = require("socket.io");

const router = require("./routes");

// App
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "dist")));

// Router
app.use(router);

const PORT = process.env.PORT || 3000;

init()
  .then(() => {
    server.listen(PORT, console.log(`Server Started @ ${PORT}`));
  })
  .catch((err) => console.log(err));

module.exports = { io };
