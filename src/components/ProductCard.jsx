import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({ products }) => {
  return (
      <div className='bg-white shadow-md relative border hover:scale-105 transition duration-500 ease-in-out cursor-pointer rounded-md mt-3'>
        <img src={products.image} alt={products.title} className='w-full h-48 object-contain my-4'/>
        <h3 className='text-xl font-bold ml-2'>{products.title}</h3>
        <p className='text-gray-500 font-semibold ml-2'>${products.price}</p>
        <div className='flex items-center gap-1 my-2 ml-2'>
          <FaStar className='text-amber-400'></FaStar>
          <FaStar className='text-amber-400'></FaStar>
          <FaStar className='text-amber-400'></FaStar>
          <FaStar className='text-amber-400'></FaStar>
        </div>
        <div className='absolute bottom-4 right-2 bg-red-600 w-8 h-8 flex items-center justify-center
          group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-500 '>
          <span className='group-hover:hidden'>+</span>
          <span className='hidden group-hover:block'>Add to cart</span>
        </div>
      </div>

  )
}

export default ProductCard