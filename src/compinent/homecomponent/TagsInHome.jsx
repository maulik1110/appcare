import React from 'react'
import tag from "../../assets/toy/tag.jpg"
import { useNavigate } from 'react-router-dom'


const TagsInHome = () => {
  const navigate = useNavigate()
  const redirectTo = ()=>{
    navigate('shop/tagproducts')
  }
  return (
    <div >
        <img onClick={redirectTo} className='p-4 rounded-lg cursor-pointer hover:scale-[0.98] transition-all duration-300' src={tag} alt="" />
    </div>
  )
}

export default TagsInHome