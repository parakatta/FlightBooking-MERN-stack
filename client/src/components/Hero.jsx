import React from 'react'
import { Link } from 'react-router-dom'
import flight from '../assets/flight.webp'

export const Hero = () => {
  return (
    <div >
        <div className='flex flex-row justify-between '>
        <div className='flex items-center p-4 w-1/12'>
        <img src={flight} alt="flight" className='w-1/2'/>
        <h3 className='text-black font-serif text-bold text-xl mx-2'>FlightBooking</h3>
        </div>
            <ul className='flex flex-row mx-4 my-2 items-center'>
                <li className='text-black text-bold text-md mx-3'>ABOUT</li>
                <li className='text-black text-bold text-md mx-3'>CONTACT</li>
            </ul>
        </div>
        <div className='flex flex-col items-center justify-center my-6'>
            <h1 className='text-white text-5xl text-extrabold text-center'>We make flight experience<br></br> amazing</h1>
            <button className='bg-blue-400 px-3 py-2 text-white rounded-lg mt-8'><Link to='/flights'>SEARCH</Link></button>
        </div>
    </div>
  )
}
