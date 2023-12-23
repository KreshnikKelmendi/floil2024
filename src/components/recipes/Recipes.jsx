import React from 'react'
import RecipeList from './RecipeList'
import RecipeGrid from './RecipeCard'

const Recipes = () => {
  return (
    <>
    <div className='w-full text-center font-sans'>
        <p className='lg:w-[35%] mt-20 mx-auto text-[30px] font-medium text-[#434343]'>
             Përgatitni receta mahnitëse me produktet Floil!
        </p>
        <p className='mt-6 lg:w-[40%] mx-auto'>
             Recetat shijojnë më mirë me produktet Floil!
        </p>
    </div>
    <RecipeGrid />
    </>
  )
}

export default Recipes