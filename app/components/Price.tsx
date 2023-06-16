import { PRICE } from '@prisma/client'
import React from 'react'

type Props = {
  price: PRICE
}

export default function Price({price}: Props) {

  const renderPrice = () => {
    if(price === PRICE.CHEAP){
      return (
        <>
          <span className="font-semibold">$$</span>
          <span className="font-semibold text-gray-400">$$$</span>
        </>
      )
    }

    if(price === PRICE.REGULAR){
      return (
        <>
          <span className="font-semibold">$$$</span>
          <span className="font-semibold text-gray-400">$$</span>
        </>
      )
    }

    if(price === PRICE.EXPENSIVE){
      return (
        <>
          <span className="font-semibold">$$$$$</span>
        </>
      )
    }
  }


  return <p className="flex mr-3">
    {renderPrice()}
  </p>
}