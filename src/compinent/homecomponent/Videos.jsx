import React from 'react'
import toyvideo1 from "../../assets/videos/toyvideo1.mp4"
import toyvideo2 from "../../assets/videos/toyvideo2.mp4"
import toyvideo3 from "../../assets/videos/toyvideo3.mp4"

const Videos = () => {
    const videos = [toyvideo1, toyvideo2, toyvideo3]
  return (
    <div className='flex flex-col'>
    
    <div className='flex items-center md:justify-evenly my-4 gap-2 md:gap-0'>
        {videos.map((item,index)=>(
            <video key={index} autoPlay loop muted className='md:h-[75vh] h-[40vh]' src={item}></video>
        ))}
    </div>
        <button className="px-4 py-2 text-center bg-red-700 rounded-md my-5 text-white mx-auto">Shop Now</button>
    </div>
  )
}

export default Videos