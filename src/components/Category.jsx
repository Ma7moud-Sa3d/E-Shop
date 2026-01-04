import React from 'react'
import ManCategory from '../assets/Man.png'
import WomanCategory from '../assets/woman.png'
import KidCategory from '../assets/kid.png'

const categories = [
  {
    title: 'Men',
    imageUrl: ManCategory,
    bgColor: '#00b3ff',
  },
  {
    title: 'Women',
    imageUrl: WomanCategory,
    bgColor: '#e2e086',
  },
  {
    title: 'Kids',
    imageUrl: KidCategory,
    bgColor: '#ed7575',
  },
]

const Category = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {categories.map((category, index)=> (
        
        <div key={index} className={` relative h-64 bg-[${category.bgColor}] hover:scale-105 transition duration-300 cursor-pointer`}>
            <img src={category.imageUrl} alt="" className={`w-full h-full bg-[${category.bgColor}] object-contain object-right rounded-lg shadow-md `}/>
            <div className='absolute top-20 left-12'>
              <p className='text-xl font-bold'>{category.title}</p>
              <p className='text-gray-600'>View All</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Category