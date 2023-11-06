import Image from 'next/image'
import React from 'react'
import AosDiv from '../../_corecomponent/aosEffect'

const Stats = () => {
  return (
    <div>
        <section className="font-jacarta max-w-7xl mx-auto mt-20 mb-10 border-t modeBorder">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <AosDiv className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10" 
      data-aos="fade-up"
      data-aos-duration="1500"
     >
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className=" font-medium text-3xl mb-2 ">Hakkımızda</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae ipsa officiis aliquid vitae repellat.</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className=" font-medium text-3xl text-yellow-400">2.7K</h2>
        <p className="leading-relaxed">Müşteri</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className=" font-medium text-3xl text-yellow-400">1.8K</h2>
        <p className="leading-relaxed">Ürün</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className=" font-medium text-3xl text-yellow-400">3.6K</h2>
        <p className="leading-relaxed">Teslim</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className=" font-medium text-3xl text-yellow-400">6</h2>
        <p className="leading-relaxed">Kategori</p>
      </div>
    </AosDiv>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 relative" 
    >
      <Image src={"/images/carousel/slider1.webp"} alt='stats' layout='fill' className='shadow-dark'></Image>
    </div>
  </div>
</section>
    </div>
  )
}

export default Stats