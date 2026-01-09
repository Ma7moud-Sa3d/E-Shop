import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const countProducts = useSelector(state => state.cart.products)
  return (
    <nav className='bg-white shadow-lg border-b-2'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <section className='text-lg font-bold'>
          <Link to='/'>E-SHOP</Link>
        </section>

        <section className='relative flex-1 mx-4'>
          <form>
            <input type="text" className='w-full border px-4 py-1.5 text-lg rounded'
              placeholder='Search Product' />
            <FaSearch className='absolute top-3 right-3 text-red-500' />
          </form>
        </section>

        <section className='flex items-center space-x-4'>
          <Link to='/cart' className='relative'>
            <FaShoppingCart className='text-lg' />
            {countProducts.length > 0 ? (
              <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white '>
                {countProducts.length}
              </span>
            ): <></>}
          </Link>
          <button className='hidden md:block'>
            Login | Register
          </button>
          <button className='block md:hidden'>
            <FaUser />
          </button>
        </section>

      </div>

      <div className='capitalize flex justify-center items-center text-sm font-bold space-x-4 py-3'>
        <Link to='/' className='hover:underline'>home</Link>
        <Link to='/shop' className='hover:underline'>Shop</Link>
        <Link to='/' className='hover:underline'>Contact</Link>
        <Link to='/' className='hover:underline'>About</Link>
      </div>

    </nav>
  )
}

export default Navbar