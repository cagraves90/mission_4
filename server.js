const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

/* ============== Middleware ================== */
app.use(cors());
app.use(express.json());

// // ---------------------------------------------- MongoDB connection ----------------------------------------------

const mongoURL = "mongodb://localhost:27017/carAPI";

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

// ---------------------------------------------- Routes ---------------------------------------------- //
const carsRouter = require("./routes/carsRoutes");

app.use(carsRouter);

// ---------------------------------------------- Server Connection ----------------------------------------------
const port = 4000;

app
  .listen(port, () => {
    console.log(`The server is listening at http://localhost:${port}`);
  })
  .on("error", (error) => {
    console.log(error);
  });
