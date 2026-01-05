import React from 'react'
import ManCategory from '../assets/Man.png'
import WomanCategory from '../assets/woman.png'
import KidCategory from '../assets/kid.png'

const categories = [
  {
    title: 'Men',
    imageUrl: ManCategory,
  },
  {
    title: 'Women',
    imageUrl: WomanCategory,
  },
  {
    title: 'Kids',
    imageUrl: KidCategory,
  },
]

const Category = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {categories.map((category, index)=> (
        
        <div key={index} className={` relative h-64 rounded-md hover:scale-105 transition duration-300 cursor-pointer
        ${category.title == 'Men' ? `bg-[#00b3ff]` : category.title == 'Women' ? `bg-[#e2e086]`: `bg-[#ed7575]`}
        `}>
            <img src={category.imageUrl} alt="" className={`w-full h-full object-cover `}/>
            <div className='absolute top-10 left-6'>
              <p className='text-xl font-bold text-white'>{category.title}</p>
              <p className='text-gray-500'>View All</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Category