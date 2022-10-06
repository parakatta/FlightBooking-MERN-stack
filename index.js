const express = require("express");
const mongoose = require("mongoose");
require("express-async-errors");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const PORT = 5080;

dotenv.config();
app.use(cors());
app.use(express.json());
const connectDB = require("./db/connect");
//middlewares
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error-handler");
const flightsRouter = require("./routes/flights");
app.get("/", (req, res) => {
  res.send("Server started");
});

app.use("/api/flights", flightsRouter);

//flights routes
app.use(notFoundMiddleware);
app.use(errorMiddleware);
const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server is listening port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
