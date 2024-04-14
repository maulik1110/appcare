import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeProduct from '../HomeProduct';
import dogtoy from "../../assets/toy/belt2.webp"
import { addDog } from '../../store/reducer/DogSlice';
import { alldogitem } from '../../utils/alldogitem';

const DogsInHome = () => {

  const dispatch = useDispatch();
  const dogs = useSelector(store=>store.cat)

  useEffect(()=>{
    dispatch(addDog(alldogitem))
  },[])
  return (
    <div className='my-4'>
      <img src={dogtoy} alt="" />
      <HomeProduct data={alldogitem} title={"Popular Dogs products"} maxneeded={4}/>
    </div>
  )
}

export default DogsInHome