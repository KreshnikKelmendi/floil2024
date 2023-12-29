import React from 'react'
import bannerVec from "../components/assets/bannerVector.png";
import { useParams } from 'react-router-dom';
import { recipeData } from '../data/recipeData';

const SinglePageOfRecipes = () => {
    const { recipeID } = useParams();

    const recipes = recipeData?.find((recipes) => recipes.id == recipeID)
    const { 
           recipe, 
           img, 
           firstPrep, 
           secondPrep,
           firstIngr,
           secondIngr,
           thirdIngr,
           fourthIngr,
           fifthIngr,
           sixthIngr,
           seventhIngr,
           eighthIngr,
           ninthIngr,
           para} = recipes;
  return (
    <>
    <div className='relative w-full'>
            <img className="w-full h-[40vh] lg:h-[48vh] 2xl:h-[30vh]" src={bannerVec} alt='Banner Vector' />
                <div className="px-4 lg:px-[120px] absolute top-1/2 left-1 transform -translate-y-1/2 text-white">
                    <h1 className="text-[32px] font-semibold mt-[-40px]">
                        {recipe}
                    </h1>
                    <p className="text-[15px] lg:w-[70%] 2xl:w-[50%] mt-6">
                        {para}
                    </p>
                </div>
    </div>

    <button className='flex border-[2px] mt-[39px] ml-[120px] py-[11px] gap-x-[16px] px-[16px]  rounded-[4px] border-[#434343]'>
        <svg className='mt-1' width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6.5002C0.00826736 6.71144 0.0954885 6.95566 0.240788 7.10962L5.57423 12.7232C5.8857 13.0911 6.48467 13.0837 6.83478 12.7521C7.18491 12.4205 7.21364 11.8335 6.86124 11.5044L2.95365 7.3865H15.111C15.6019 7.3865 16 6.98957 16 6.50009C16 6.01061 15.6019 5.61368 15.111 5.61368H2.95365L6.86124 1.49576C7.21364 1.16664 7.1847 0.577015 6.83458 0.245423C6.48445 -0.08618 5.87678 -0.0876205 5.57402 0.276955L0.240581 5.89054C0.0783344 6.06242 0.00248153 6.26318 0 6.5002Z" fill="#434343"/>
        </svg>
           Kthehu mbrapa
    </button>

    <div className='lg:px-[120px] mt-[35px] px-4'>
        <img src={img} alt='' className='h-[396px] w-full object-cover rounded-[20px]'/>
    </div>

    
        <div className='grid lg:grid-cols-3 gap-x-[17px] gap-y-[17px] w-full lg:px-[120px] px-4 h-fit lg:h-[273px] mt-[55px]'>
            <div className='py-[38px] rounded-[20px] border-[2px] border-[#249A70]'>
                <p className=' ml-[33px] text-[16.6px] text-[#434343]'>Hapi i parë</p>
                <p className='text-[10.26px] font-sans font-normal px-[33px] mt-[30px] text-[#434343]'>{firstPrep}</p>
            </div>
            <div className='py-[38px] rounded-[20px] border-[2px] border-[#249A70]'>
                <p className='ml-[33px] text-[16.6px] text-[#434343]'>Hapi i dytë</p>
                <p className='text-[10.26px] font-sans font-normal px-[33px] mt-[30px] text-[#434343]'>{secondPrep}</p>
            </div>
            <div className='font-sans py-[38px] rounded-[20px] bg-[#249A70]'>
            <p className='ml-[33px] text-[16.6px] text-white'>Përbërësit</p>
            <div className='px-[33px] text-white'>
                <ul className='grid grid-cols-2 text-[10px] mt-[30px] gap-y-2'>
                    <li>{firstIngr}</li>
                    <li>{secondIngr}</li>
                    <li>{thirdIngr}</li>
                    <li>{fourthIngr}</li>
                    <li>{fifthIngr}</li>
                    <li>{sixthIngr}</li>
                    <li>{seventhIngr}</li>
                    <li>{eighthIngr}</li>
                    <li>{ninthIngr}</li>
                </ul>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default SinglePageOfRecipes