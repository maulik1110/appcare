import React from 'react'
import {alldogitem} from "../../utils/alldogitem"
import IncludeProdPage from './IncludeProdPage'


const DogPage = () => {
  return (
    <div>

        <IncludeProdPage data={alldogitem}/>
    </div>
  )
}

export default DogPage