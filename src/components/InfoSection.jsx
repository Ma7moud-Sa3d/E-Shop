import React from 'react'
import {FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag} from 'react-icons/fa'


const InfoSection = () => {
  const infoItems = [
        {
          icon: <FaShippingFast className='text-3xl text-red-600'/>,
          title: 'Free Shipping',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, dolorem?'
        },
        {
          icon: <FaHeadset className='text-3xl text-red-600'/>,
          title: 'Support 24/7',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, dolorem?'
        },
        {
          icon: <FaMoneyBillWave className='text-3xl text-red-600'/>,
          title: '100% Money Back',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, dolorem?'
        },
        {
          icon: <FaLock className='text-3xl text-red-600'/>,
          title: 'Payment Secure',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, dolorem?'
        },
        {
          icon: <FaTag className='text-3xl text-red-600'/>,
          title: 'Discount',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, dolorem?'
        },
  ]
  return (
    <div className='bg-white pt-12 pb-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {infoItems.map((item, index)=> (
          <div key={index} className='p-4 rounded-lg shadow-md flex flex-col items-center text-center gap-2 hover:scale-105 transition duration-300 cursor-pointer'>
            {item.icon}
            <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
            <p className='mt-2 text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection