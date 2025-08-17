import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
function Cart() {
  return (
    <div className='flex'>
      <div className='flex relative'>
        <CiShoppingCart className='text-white ml-10 mt-2 text-3xl font-bold' />
        <span className='text-white mt-[3px] absolute right-[6px]'>0</span>
      </div>
    </div>
  )
}

export default Cart
