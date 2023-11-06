"use client"
import React from 'react'
import { dataChild } from '@/app/constants'
import Image from 'next/image'
import AOS from "aos"
import "aos/dist/aos.css"
import AosDiv from '../../_corecomponent/aosEffect'
const CardChild = () => {

  React.useEffect(() => {
    AOS.init({duration:1000});
  },[]);

  return (
    <div className='mt-14 font-jacarta mb-10'>
    <div className='w-full h-px header-div flex justify-end items-center rounded-full  transition-colors '>
      <div className='z-20 header-div px-2 rounded-xl border'>
        <h1 className='text-4xl font-extrabold textColor p-2'>Çocuk</h1>
      </div>
    </div>
    <div className='max-w-6xl mx-auto mt-16 '>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 justify-items-center'>
        {dataChild.map((item, index) => (
          <AosDiv key={index} className=' relative w-52 h-72' data-aos="zoom-in" data-aos-duration="1000">
            <div className='h-52 relative' >
              <Image src={item.url} alt='dress' layout='fill' objectFit='cover' objectPosition='center' className='rounded-md hover:scale-105 transition-all duration-500 ' />
            </div>
            <div className=' p-2'>
              <p className='text-md font-normal border-b border-gray-500 p-1'>{item.price}</p>
              <p className='text-md font-medium'>{item.description}</p>
            </div>
          </AosDiv>
        ))} 
       </div>
    </div>
  </div>
  )
}

export default CardChild