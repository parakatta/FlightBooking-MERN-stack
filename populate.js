require("dotenv").config();
const mongoose = require("mongoose");
const Flights = require("./models/Flight");
const Flightsjson = require("./flights.json");
const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Flights.deleteMany();
    await Flights.create(Flightsjson);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
