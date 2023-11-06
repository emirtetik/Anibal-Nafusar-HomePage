import React from 'react'
import CardWoman from './cardWoman'
import CardAccessory from './accessory'
import CardChild from './child'

const Card = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-y-16'>
        <CardWoman/>
        <CardAccessory/>
        <CardChild/>
    </div>
  )
}

export default Card