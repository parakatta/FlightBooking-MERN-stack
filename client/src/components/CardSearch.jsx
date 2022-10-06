import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";

export const CardSearch = () => {
  const state = useSelector((state) => state);
  
  console.log("cardserach yes");
  if(state.flights.length != 0){
  return (
    <>
      {Object.keys(state.flights).map((keys, i) => (
        <div key={i} className="flex justify-center">
          <div className="bg-white w-1/2 rounded-lg shadow-lg flex flex-col py-8 px-10 my-8">
            <h1 className="bg-green-200 py-2 px-4 font-bold text-center">AVAILABLE</h1>
            <div className="flex flex-row justify-between p-3">
              <h1 className="font-mono text-black">
                {state.flights[keys].airlineName}
                <br /> <span>{state.flights[keys].planeType}</span>{" "}
              </h1>
              <h1 className="text-xl">${state.flights[keys].price}</h1>
            </div>
            <div className="flex flex-row justify-between items-center p-3">
              <h2 className="text-grey-600 ">
                FROM <br />
                {state.flights[keys].origin}
              </h2>
              <h1>
                TO <br /> {state.flights[keys].destination}
              </h1>
              <h1>
                DEPARTURE DATE <br /> {state.flights[keys].departureDate}
              </h1>
              <h1>
                SEATS <br />
                {state.flights[keys].emptySeats}
              </h1>
            </div>
            <button className="bg-blue-300 py-2 px-3 font-bold w-1/4">BOOK NOW</button>
          </div>
        </div>
      ))}
    </>
  );
      }else{
        return(
          <div className="flex justify-center"><h1 className="text-xl">No flights found</h1></div>
        )
      }
};
