import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import banner1 from "../assets/allbanner/banner1.webp"
import banner2 from "../assets/allbanner/banner2.webp"
import banner3 from "../assets/allbanner/banner3.webp"
import Vision from './Vision'
import {allcatitem} from "../utils/allcatitem"
import { alldogitem } from '../utils/alldogitem'
import { useDispatch, useSelector } from 'react-redux'
import { addDog } from '../store/reducer/DogSlice'
import { addCat } from '../store/reducer/CatSlice'
import HomeProduct from './HomeProduct'
import CatsInHome from './homecomponent/CatsInHome'
import DogsInHome from './homecomponent/DogsInHome'
import TagsInHome from './homecomponent/TagsInHome'
import GameInHome from './homecomponent/GameInHome'
import ReviewForm from './review/ReviewForm'
import ReviewDisplay from './review/ReviewDisplay'

const Home = () => {

  const dispatch = useDispatch()
  const cats = useSelector(store=>store.cat)
  const dogs = useSelector(store=>store.dog)
  const imgs = [banner1, banner2, banner3]

  useEffect(()=>{
    dispatch(addCat(allcatitem))
    dispatch(addDog(alldogitem))
  },[])

  const [reviews, setReviews] = useState([
    { name: 'John Doe', experience: 'Great experience!' },
    { name: 'Jane Smith', experience: 'Awesome product!' },
  ]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };
  return (
    <div className='px-5 '>
      <Banner data={imgs}/>
      <Vision/>
      {/* <HomeProduct data={allcatitem} title={"Popular cats products"} maxneeded={4}/> */}
      <CatsInHome/>
      <DogsInHome/>
      <TagsInHome/>
      <GameInHome/>
      <ReviewDisplay reviews={reviews}/>
      <ReviewForm onSubmit={addReview}/>
    </div>

  )
}

export default Home