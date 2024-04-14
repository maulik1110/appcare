import React from 'react'
import toy1 from "../../assets/toy/game1.webp"
import toy2 from "../../assets/toy/game2.webp"
import belt from "../../assets/toy/belt.webp"
import Videos from './Videos'
const GameInHome = () => {
  return (
    <div>
      <div className="imgs md:flex gap-2 ">
        <img className='md:w-[49%] my-2 md:my-0' src={toy1} alt="" />
        <img className='md:w-[49%] my-2 md:my-0' src={toy2} alt="" />
      </div>
        <img className='mt-4 rounded-lg' src={belt} alt="" />
        <Videos/>
    </div>
  )
}

export default GameInHome