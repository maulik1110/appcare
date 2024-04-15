import React from 'react'
import SearchAndFilter from './SearchAndFilter'
import { allcatitem } from '../../utils/allcatitem'

const CatPage = () => {
  return (
    <div className='w-screen '>
        <SearchAndFilter data={allcatitem}/>
    </div>
  )
}

export default CatPage