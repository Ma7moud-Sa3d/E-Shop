import React from 'react'

const Register = ({ switchToLogin }) => {
  return (
    <>
      <h2 className='text-2xl font-bold mb-4'>Register</h2>

      <form className='flex flex-col gap-3'>
        <input
          type="text"
          placeholder="Name"
          className='border px-3 py-2 rounded'
        />
        <input
          type="email"
          placeholder="Email"
          className='border px-3 py-2 rounded'
        />
        <input
          type="password"
          placeholder="Password"
          className='border px-3 py-2 rounded'
        />

        <button className='bg-black text-white py-2 rounded hover:bg-gray-800'>
          Register
        </button>
      </form>

      <p className='text-sm mt-4 text-center'>
        Already have an account?{' '}
        <button
          onClick={switchToLogin}
          className='text-blue-500 hover:underline'
        >
          Login
        </button>
      </p>
    </>
  )
}

export default Register
