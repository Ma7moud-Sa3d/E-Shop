import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white px-4 py-8'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4'>
        <div className=''>
          <h2 className='text-xl font-bold mb-3'>E-Shop</h2>
          <p className='font-small'>Your one-step for all your needs. Here ipsum 
            dolor sit amet consectetur adipisicing elit. Ducimus, totam!
          </p>
        </div>
        <div className='text-center'>
          <h2 className='text-xl font-bold mb-3'>Quick Links</h2>
          <ul className='flex flex-col'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
          </ul>
        </div>
        <div className=''>
          <h2 className='text-xl font-bold mb-3'>Follow us</h2>
          <div className='flex space-x-4 text-xl mb-3'>
            <FaFacebook className='cursor-pointer hover:scale-105 ' />
            <FaTwitter className='cursor-pointer hover:scale-105 ' />
            <FaGithub  className='cursor-pointer hover:scale-105 '/>
            <FaLinkedin className='cursor-pointer hover:scale-105 ' />
          </div>
          <div className=''>
            <input className='border outline-none text-xl h-9 rounded px-1' type="email" placeholder='Enter Email' />
            <button className='block bg-red-600 mt-2 py-2 px-2 rounded cursor-pointer hover:bg-red-800 duration-600'>Subscribe</button>
          </div>
        </div>
      </div>

      <div className='w-full h-[1px] bg-white my-4'></div>

      <div className='flex justify-between flex-col md:flex-row'>
        <div>
          &copy; {new Date().getFullYear()} E-Shop all rights reserved.
        </div>
        <div className='flex items-center gap-4'>
          <p>Privacy Policy.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer