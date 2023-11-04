import React from 'react'
import Image from 'next/image'
const Right = () => {
  return (
    <div className='flex justify-center items-center '>
        <div className='flex justify-center items-center '>
            <Image className='' width={650} height={600} src={"/assets/guy.webp"} alt='hero-image'></Image>
        </div>
    </div>
  )
}

export default Right