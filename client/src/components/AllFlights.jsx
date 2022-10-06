import axios from "axios";
import React, { useState, useEffect } from "react";
//import {flights} from '../assets/flights.json';
export const AllFlights = () => {
  const [flight, setFlight] = useState([]);
  const [checked, setchecked] = useState(false);
  const getFlights = async () => {
    try {
      const response = await axios.get("http://localhost:5080/api/flights/?sort");
      setFlight(response.data);
    } catch (error) {
      console.log(error);
    }
  
  };
  const sortFlights = async () => {
    try {
       const response = await axios.get("http://localhost:5080/api/flights/?sort=price");
      setFlight(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFlights()
  }, []);

  return (
    <>
    <div className="m-2 p-3 bg-white  flex flex-row items-center rounded-lg">
      <h1 className="p-2 ml-8">Price</h1>
      <input type="checkbox" onChange={sortFlights}></input>
    </div>
   
      {flight && flight.map((fly) => (
          <div className="flex justify-center" key={fly.id}>
            <div className="bg-white w-1/2 rounded-lg shadow-lg flex flex-col py-8 px-10 my-6">
              <div className="flex flex-row justify-between p-3">
                <h1 className="font-mono">
                {fly.airlineName}
                  <br /> <span>{fly.planeType}</span>{" "}
                </h1>
                <h1 className="text-xl">${fly.price}</h1>
              </div>
              <div className="flex flex-row justify-between items-center p-3">
                <h2 className="text-grey-600 ">
                  FROM <br />
                  {fly.origin}
                </h2>
                <h1>
                  TO <br /> {fly.destination}
                </h1>
                <h1>
                  DEPARTURE DATE <br /> {fly.departureDate}
                </h1>
                <h1>
                  SEATS <br />
                  {fly.emptySeats}
                </h1>
              </div>
            </div>
          </div>
        ))}
    </>
  );
  
}
