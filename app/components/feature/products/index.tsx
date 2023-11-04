import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCategory = () => {
  return (
        <div className=' flex mt-10 justify-end'>
        <div className=''> 
             <Image  src={"/assets/quayMat.jpg"} alt="woman" width={220} height={200}/>
        </div>
      <div className='flex justify-left font-jacarta items-center header-div textColor  w-4/5 h-52 rounded-l-3xl py-6 px-4 gap-20'>
      <h4 className='text-3xl font-medium'>Category</h4>
        <div className='flex  items-center justify-center gap-3'>
        <Image  alt='category' src={"/assets/Shirt-landing.png"} width={120} height={70}/>
        <div>
            <h2 className='text-xl font-bold'>Dress</h2>
            <Link href={"/"} className='text-sm text-gray-400 hover:text-white font-bold'>See All</Link>
        </div>
        </div>
        <div className='flex items-center justify-center gap-3'>
        <Image  alt='category' src={"/assets/Sunglasses-landing.png"} width={130} height={70}/>
        <div>
            <h2 className='text-xl font-bold'>Dress</h2>
            <Link href={"/"} className='text-sm text-gray-400 hover:text-white font-bold'>See All</Link>
        </div>
        </div>
        <div className='flex items-center justify-center gap-3'>
        <Image  alt='category' src={"/assets/Shoe-landing.png"} width={120} height={70}/>
        <div>
            <h2 className='text-xl font-bold'>Dress</h2>
            <Link href={"/"} className='text-sm text-gray-400 hover:text-white font-bold'>See All</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory