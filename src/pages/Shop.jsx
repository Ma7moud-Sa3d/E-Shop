import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Shop = () => {
  const products = useSelector(state => state.product.products)
  return (
      <div className='container mx-auto py-12 px-4 md:px-16 lg:px-'>
        <h2 className='text-2xl font-bold mb-6 text-center '>Shop</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer'>
          {products.map((product)=> (
            <ProductCard products={product}/>
          ))}
        </div>
      </div>

  )
}

export default Shop