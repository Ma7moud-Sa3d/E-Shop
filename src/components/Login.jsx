import React from 'react'

const Login = ({ switchToRegister }) => {
  return (
    <>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>

      <form className='flex flex-col gap-3'>
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
          Login
        </button>
      </form>

      <p className='text-sm mt-4 text-center'>
        Don’t have an account?{' '}
        <button
          onClick={switchToRegister}
          className='text-blue-500 hover:underline'
        >
          Register
        </button>
      </p>
    </>
  )
}

export default Login
