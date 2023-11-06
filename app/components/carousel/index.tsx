"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { dataSlider } from '@/app/constants';
import Image from 'next/image';
import AosDiv from '../_corecomponent/aosEffect';
const CarouselProduct = () => {
  return (
    <div className="max-w-7xl mx-auto h-72 mt-20 ">
     <Carousel showThumbs={false}>
        {dataSlider.map((image) => (
          <AosDiv key={image.id} className="w-full h-64 relative   rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
            <Image src={image.url} alt="Product" layout='fill' style={{  objectPosition: 'center top', borderRadius:"24px" }} />
          </AosDiv>
        ))}
      </Carousel>
</div>
  )
}

export default CarouselProduct