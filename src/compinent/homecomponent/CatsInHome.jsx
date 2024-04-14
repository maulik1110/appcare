import React, { useEffect } from 'react'
import { allcatitem } from '../../utils/allcatitem'
import { useDispatch, useSelector } from 'react-redux'
import { addCat } from '../../store/reducer/CatSlice';
import HomeProduct from '../HomeProduct';
import cattoy from "../../assets/toy/cattoy.webp"

const CatsInHome = () => {

  const dispatch = useDispatch();
  const cats = useSelector(store=>store.dog)

  useEffect(()=>{
    dispatch(addCat(allcatitem))
  },[])
  return (
    <div className='my-4'>
      <img src={cattoy} alt="" />
      <HomeProduct data={allcatitem} title={"Popular cats products"} maxneeded={4}/>
    </div>
  )
}

export default CatsInHome