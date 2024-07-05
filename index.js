const { init } = require("./db");
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("./routes");

const app = express();


app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "dist")));
app.use(router);

const PORT = process.env.PORT || 3000;
init()
  .then(
    app.listen(PORT, () => {
      console.log(`Server Started @ ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
