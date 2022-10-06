import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flightData } from "../../rootSlice";
export const Form = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    const url = `http://localhost:5080/api/flights/about?`;
    const response = await axios.get(
      `${url}` +
        "origin=" +
        data.origin +
        "&destination=" +
        data.destination +
        "&planeType=" +
        data.planeType
    );
    console.log(response.data);

    dispatch(flightData(response.data));
    history("/CardSearch");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="flex  justify-center my-6">
        <div className="bg-white w-1/2 rounded-lg shadow-lg flex flex-col py-8 px-10 my-8">
          <div className="flex flex-row justify-between p-3">
            <h1 className="font-mono"> CHOOSE A PLANE</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-row justify-between items-center p-3"
          >
            <h2 className="text-grey-600 ">
              FROM <br />
              <select
                {...register("origin", { required: "Select one" })}
                className="px-3 py-2 my-3"
              >
                <option>MUA</option>
              </select>
            </h2>
            <h1>
              TO <br />
              <select
                {...register("destination", { required: "Select one" })}
                className="px-3 py-2 my-3"
              >
                <option>SFO</option>
                <option>PDF</option>
                <option>PDX</option>
                <option>LAX</option>
                <option>CLE</option>
              </select>
            </h1>
            <h1>
              DEPARTURE DATE <br />
              <select
                {...register("departureDate", { required: "Select one" })}
                className="px-3 py-2 my-3"
              >
                <option>2015/02/12</option>
                <option>2015/02/20</option>
                <option>2015/02/13</option>
                <option>2015/02/11</option>
                <option>2015/08/11</option>
                <option>2015/07/11</option>
                <option>2015/06/11</option>
                <option>2015/04/11</option>
                <option>2015/03/20</option>
              </select>
            </h1>
            <h1>
              PLANE TYPE <br />
              <select
                {...register("planeType", { required: "Select one" })}
                className="px-3 py-2 my-3"
              >
                <option>Boeing 737</option>
                <option>Boeing 777</option>
                <option>Boeing 707</option>
                <option>Boeing 727</option>
                <option>Boeing 747</option>
                <option>Boeing 757</option>
                <option>Boeing 787</option>
              </select>
            </h1>
            <button
              type="submit"
              className="bg-blue-400 px-3 py-2 text-white rounded-lg"
            >
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
