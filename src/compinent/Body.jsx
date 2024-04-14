import React from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'


const Body = () => {

  return (
    <div className='w-screen h-screen bg-white'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Body