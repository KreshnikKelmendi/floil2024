import React, { useEffect, useState } from 'react';
import { recipeData } from '../../data/recipeData';
import { Link } from 'react-router-dom';

const CategoryRecipes = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setData(recipeData);
    setCollection([...new Set(recipeData?.map((item) => item.name))]);
  }, []);

  const filterData = (itemData) => {
    setIsLoading(true);
    setActiveButton(itemData);
    setTimeout(() => {
      const filteredData = recipeData.filter((item) => item.name === itemData);
      setData(filteredData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className='text-[#434343] font-sans font-semibold text-[12px] flex flex-col lg:flex-row gap-y-5 justify-center items-center gap-x-5 mt-12 lg:mt-[159px]'>
        <button
          className="bg-[#F6F6F6] w-1/2 lg:w-[141px] lg:h-[41px] py-2 lg:py-0 rounded-md hover:bg-[#F3C24E] hover:text-white"
          onClick={() => {
            setActiveButton(null);
            setData(recipeData);
          }}
        >
          Të gjitha
        </button>
        {collection?.map((item) => (
          <button
            key={item}
            className={`bg-${activeButton === item ? '[#F3C24E]' : '[#F6F6F6]'} py-2 lg:py-0 rounded-md w-1/2 lg:w-[141px] lg:h-[41px] hover:bg-[#F3C24E] hover:text-white`}
            onClick={() => filterData(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className='w-full px-4 mt-[59px]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-[30px] gap-y-[30px]'>
          {isLoading ? (
            <div className='flex items-center justify-center lg:col-span-4'>
              {/* Display your loading indicator here (e.g., SVG loading animation) */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='animate-spin h-5 w-5 text-[#434343]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 21a9 9 0 010-18 9 9 0 016 16.155 9 9 0 01-6 1.845'
                ></path>
              </svg>
            </div>
          ) : (
            data?.map((recipe, key) => (
              <div className='lg:w-full 2xl:w-[379px] relative' key={key}>
                <img src={recipe?.img} alt='' className='lg:w-[379px] lg:h-[210px] object-cover rounded-t-xl' />
                <p className='absolute top-[188px] rounded-tl-lg rounded-bl-lg text-[12px] font-sans uppercase text-white right-0 px-[26px] py-[13px] bg-[#249A70] font-semibold'>{recipe?.name}</p>
                <div className='bg-[#F6F6F6] h-[247px] rounded-b-xl py-[52px] px-[23px]'>
                  <p className='text-[16.6px] text-[#434343] text-sans font-semibold'>{recipe?.recipe}</p>
                  <p className='mt-[28px] text-[10.26px] text-[#848484]'>{recipe?.afterTitle}</p>
                  <Link to={`/recetat/${recipe.id}`} onClick={() => window.scrollTo({top: 0, left: 0})}>
                    <button className='mt-[28px] text-[#249A70] text-[12px] text-sans font-semibold hover:text-[#434343]'>...më shumë</button>
                  </Link> 
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryRecipes;
