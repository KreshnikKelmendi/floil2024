import React from 'react'
import { recipes } from './data'
import { Link } from 'react-router-dom'

const RecipeCard = () => {
  return (
    <div className='w-full px-4 mt-[59px]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-[30px] gap-y-[30px]'>
            {recipes?.map((recipe, key) => (
                <div className='lg:w-full 2xl:w-[379px] relative' key={key}>
                    <img src={recipe?.image} alt='' className='lg:w-[379px] lg:h-[210px] object-cover rounded-t-xl' />
                    <p className='absolute top-[188px] rounded-tl-lg rounded-bl-lg text-[12px] font-sans uppercase text-white right-0 px-[26px] py-[13px] bg-[#249A70] font-semibold'>{recipe?.name}</p>
                        <div className='bg-[#F6F6F6] rounded-b-xl py-[52px] px-[23px]'>
                            <p className='text-[16.6px] text-[#434343] text-sans font-semibold'>{recipe?.title}</p>
                            <p className='mt-[28px] text-[10.26px] text-[#848484]'>{recipe?.description}</p>
                            <button className='mt-[28px] text-[#249A70] text-[12px] font-sans font-semibold hover:text-[#434343]'>...më shumë</button>
                        </div>
                </div>
            ))}
            
        </div>
        <Link to="/recetat" onClick={() => window.scrollTo({top: 0,left: 0})}>
            <p className='mx-auto text-center mt-[37px] text-[#BFBFBF] hover:text-[#249A70] cursor-pointer font-semibold text-[12px]'>View all</p>
        </Link>
    </div>
  )
}

export default RecipeCard