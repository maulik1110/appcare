import React from 'react'
import Banner from './Banner'
import banner1 from "../assets/allbanner/banner1.webp"
import banner2 from "../assets/allbanner/banner2.webp"
import banner3 from "../assets/allbanner/banner3.webp"
import Vision from './Vision'

const Home = () => {
  
  const imgs = [banner1, banner2, banner3]

  return (
    <div className='px-5 '>
      <Banner data={imgs}/>
      <Vision/>
    </div>

  )
}

export default Home