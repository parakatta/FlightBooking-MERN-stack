import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { CardSearch } from './components/CardSearch';
import { Main } from './components/Main'
import { Recommend } from './components/Recommend'

function App() {

  return (
    <div className='bg-blue-200 h-full'>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/flights' element={<Recommend/>}/> 
        <Route exact path='/CardSearch' element={<CardSearch/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
