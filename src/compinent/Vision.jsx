import React from 'react'
import vision from "../assets/allbanner/vision2.jpeg"

const Vision = () => {
  return (
    <div className='w-full  mt-4 md:h-[60vh] md:flex justify-between item-center '>
        <img className='rounded-xl object-cover md:w-1/2 w-full h-full' src={vision} alt="" />
        <div className="content px-5">
        <h1 className='font-bold text-4xl md:text-7xl py-4 md:py-0'>Our Vision!</h1>

            <h1 className='font-bold text-4xl opacity-80'>We believe in giving back, today and everyday</h1>
            <p className='text-xl font-semibold opacity-75 my-2'>At the heart of our company, we are driven by the desire to positively impact the lives of disadvantaged animals in our vicinity. We actively support a range of animal welfare initiatives throughout India.</p>
            <p className='text-md font-semibold opacity-75 my-2'>Our philanthropic endeavors encompass various initiatives aimed at supporting local feeders with food donations through feeding programs. We also conduct adoption campaigns to raise awareness about adoption and facilitate connections between potential pet parents and animals available for adoption. Additionally, we distribute reflective collars to street dogs to enhance their safety and visibility in low-light conditions.</p>

        </div>

    </div>
  )
}

export default Vision