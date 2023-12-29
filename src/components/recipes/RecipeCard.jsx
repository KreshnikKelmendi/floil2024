import React from 'react'
import { Link } from 'react-router-dom'
import { recipeData } from '../../data/recipeData'

const RecipeCard = () => {
  return (
    <div className='w-full px-4 mt-[59px]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-[30px] gap-y-[30px]'>
            {recipeData?.map((recipe, key) => (
                <div className='lg:w-full mx-auto 2xl:w-[379px] relative' key={key}>
                    <img src={recipe?.img} alt='' className='w-[379px] h-[210px] object-cover rounded-t-xl' />
                    <p className='absolute top-[188px] rounded-tl-lg rounded-bl-lg text-[12px] font-sans uppercase text-white right-0 px-[26px] py-[13px] bg-[#249A70] font-semibold'>{recipe?.name}</p>
                        <div className='bg-[#F6F6F6] w-[379px] lg:w-full h-[247px] rounded-b-xl py-[52px] px-[23px]'>
                            <p className='text-[16.6px] text-[#434343] text-sans font-semibold'>{recipe?.recipe}</p>
                            <p className='mt-[28px] text-[10.26px] text-[#848484]'>{recipe?.afterTitle}</p>
                            <Link to={`/recetat/${recipe.id}`} onClick={() => window.scrollTo({top: 0, left: 0})}>
                                <button className='mt-[28px] text-[#249A70] text-[12px] font-sans font-semibold hover:text-[#434343]'>...më shumë</button>
                            </Link>
                        </div>
                </div>
            ))}
            
        </div>
        <Link to="/recetat" onClick={() => window.scrollTo({top: 0,left: 0})}>
            <p className='mx-auto text-center mt-[37px] text-[#BFBFBF] hover:text-[#249A70] cursor-pointer font-semibold text-[12px]'>Shiko të gjitha</p>
        </Link>
    </div>
  )
}

export default RecipeCard