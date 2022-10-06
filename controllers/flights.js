const Flights = require("../models/Flight");

class advancedFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  sorting() {
    if (this.query.sort) {
      const sortby = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortby);
    } else {
      this.query = this.query.sort(id);
    }
    return this;
  }
}
const getFlights = async (req, res) => {
  try {
    const features = new advancedFeatures(Flights.find(), req.query).sorting();
    const flights = await features.query;
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getFlightDetail = async (req, res) => {
  try {
    console.log(req.query);
    const origin = req.query.origin;
    const destination = req.query.destination;
    const departureDate = req.query.departureDate;
    const planeType = req.query.planeType;
    console.log(planeType);
    const flights1 = await Flights.find({
      origin: origin,
      destination: destination,
      planeType: planeType,
    });
    res.status(200).json(flights1);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getFlights, getFlightDetail };
