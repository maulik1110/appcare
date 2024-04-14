import React from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import DogPage from './shoppingpages/DogPage'


const Body = () => {

  return (
    <div className='w-screen h-screen bg-white'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop/dogproducts' element={<DogPage/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Body