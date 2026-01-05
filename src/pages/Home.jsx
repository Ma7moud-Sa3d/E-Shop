import React, { useEffect } from 'react'
import { categories, heroImage } from '../assets/mockData'
import InfoSection from '../components/InfoSection'
import Category from '../components/Category'
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../redux/productSlice'
import { productsAPI } from '../API/productsAPI'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'


const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)
  useEffect(() => {
    const fetchData = async () => {
      const data = await productsAPI()
      dispatch(setProduct(data))
    };
    fetchData();
  }, [])

  return (
    <div>
      <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>

          <div className='w-full md:w-3/12'>
            <div className='uppercase bg-red-600 text-xl text-white font-bold px-2 py-2.5 rounded'>shop by categories</div>
            <ul className='bg-gray-300 px-2 py-3 space-y-2'>
              {categories.map((category, index) => (
                <li key={index} className='flex items-center text-sm font-medium'>
                  <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative '>
            <img src={heroImage} alt="" className='h-full w-full' />
            <div className='uppercase absolute top-16 right-6 px-5 md:px-0'>
              <p className='text-black mb-4'>code with Mahmoud</p>
              <h2 className='text-3xl font-bold'>Welcome to e-shop</h2>
              <p className='text-xl mt-2.5 font-bold '>millions+ products</p>
              <button className='bg-[#EEA727] px-8 py-1.5 text-white mt-4 hover:bg-[#ff8800] hover:cursor-pointer
               transform transition-transform duration-300 hover:scale-105 rounded'>shop now</button>  {/** */}
            </div>
          </div>

        </div>
        <InfoSection />
        <Category />

        <div className='container mx-auto py-12'>
          <h2 className='text-2xl font-bold mb-6 text-center '>Top Products</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer'>
            {products.slice(0, 5).map((product) => (
              <ProductCard products={product} />
            ))}
          </div>
        </div>


      </div>
      <Shop />

    </div>
  )
}

export default Home