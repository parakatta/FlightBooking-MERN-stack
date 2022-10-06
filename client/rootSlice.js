import { createSlice } from "@reduxjs/toolkit";
import {FLIGHTS} from './src/shared/flights';
const rootSlice= createSlice({
    name:"root",
    initialState:{
        flights: FLIGHTS     
    },
    reducers: {
        flightData: (state, action) => { state.flights = action.payload }
      }
})

export const reducer = rootSlice.reducer;

export const { flightData } = rootSlice.actions