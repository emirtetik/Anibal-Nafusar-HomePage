import React from 'react'
import Image from 'next/image'
import AosDiv from '../_corecomponent/aosEffect'
const Right = () => {
  return (
    <div className='flex justify-center items-center ' >
        <AosDiv className='flex justify-center items-center ' data-aos="fade-left" data-aos-duration="1500">
            <Image className='' width={650} height={600} src={"/images/hero/guy.webp"} alt='hero-image'></Image>
        </AosDiv>
    </div>
  )
}

export default Right