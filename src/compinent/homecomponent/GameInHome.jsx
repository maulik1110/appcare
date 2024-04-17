import React from 'react'
import toy1 from "../../assets/toy/game1.webp"
import toy2 from "../../assets/toy/game2.webp"
import belt from "../../assets/toy/belt.webp"
import Videos from './Videos'
import { useNavigate } from 'react-router-dom'

const GameInHome = () => {

  const navigate = useNavigate()
  const redirectTo = ()=>{
    navigate('shop/gameproducts')
  }
  return (
    <div>
      <div className="imgs md:flex gap-2 ">
        <img onClick={redirectTo} className='md:w-[49%] my-2 md:my-0 hover:scale-[0.98] transition-all duration-300' src={toy1} alt="" />
        <img onClick={redirectTo} className='md:w-[49%] my-2 md:my-0 hover:scale-[0.98] transition-all duration-300' src={toy2} alt="" />
      </div>
        <img onClick={redirectTo} className='mt-4 rounded-lg' src={belt} alt="" />
        <Videos/>
    </div>
  )
}

export default GameInHome