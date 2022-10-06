const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    airlineName:{
        type: String,
     

    },
    price:{
        type:Number,

    },
    departureDate:{
        type: Date,
    },
    planeType:{
        type:String,

    },
    origin:{
        type:String,

    },
    code:{
        type:String,

    },
    emptySeats:{
        type:Number,

    },
    destination:{
        type:String
    }

});

module.exports=mongoose.model('Flights',FlightSchema);