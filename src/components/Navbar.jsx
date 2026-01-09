import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Navbar = () => {

  const [showModal, setShowModal] = useState(false)
  const [authType, setAuthType] = useState('login') // login | register

  const countProducts = useSelector(state => state.cart.products)

  const openLogin = () => {
    setAuthType('login')
    setShowModal(true)
  }

  const openRegister = () => {
    setAuthType('register')
    setShowModal(true)
  }

  return (
    <>
      <nav className='bg-white shadow-lg border-b-2'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>

          <section className='text-lg font-bold'>
            <Link to='/'>E-SHOP</Link>
          </section>

          <section className='relative flex-1 mx-4'>
            <input
              type="text"
              className='w-full border px-4 py-1.5 text-lg rounded'
              placeholder='Search Product'
            />
            <FaSearch className='absolute top-3 right-3 text-red-500' />
          </section>

          <section className='flex items-center space-x-4'>
            <Link to='/cart' className='relative'>
              <FaShoppingCart className='text-lg' />
              {countProducts.length > 0 && (
                <span className='absolute top-0 left-3 text-xs w-4 h-4 bg-red-600 rounded-full flex justify-center items-center text-white'>
                  {countProducts.length}
                </span>
              )}
            </Link>

            {/* Desktop */}
            <div
              
              className='hidden md:block font-semibold cursor-pointer'
            >
              <span onClick={openLogin}>Login</span> | <span onClick={openRegister}>Register</span>
            </div>

            {/* Mobile */}
            <button
              onClick={openLogin}
              className='block md:hidden'
            >
              <FaUser />
            </button>
          </section>
        </div>

        <div className='capitalize flex justify-center text-sm font-bold space-x-4 py-3'>
          <Link to='/' className='hover:underline'>home</Link>
          <Link to='/shop' className='hover:underline'>shop</Link>
          <Link to='/' className='hover:underline'>contact</Link>
          <Link to='/' className='hover:underline'>about</Link>
        </div>
      </nav>

      {/* ================= Modal ================= */}
      {showModal && (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
          <div className='bg-white w-[90%] md:w-100 rounded-xl p-6 relative'>

            <button
              onClick={() => setShowModal(false)}
              className='absolute top-3 right-4 text-xl font-bold cursor-pointer'
            >
              ×
            </button>

            {authType === 'login' ? (
              <Login switchToRegister={openRegister} />
            ) : (
              <Register switchToLogin={openLogin} />
            )}

          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
