import React from 'react'
import { useParams } from 'react-router-dom';
import bannerVec from "../components/assets/bannerVector.png";
import bannerProductVector from "../components/assets/vectorOnProduct.png"
import { products } from '../data/products';

const SinglePageOfProducts = () => {
    const { productID } = useParams();

    const product = products?.find((product) => product.id == productID)
    const {image, title, secondTitle, description, paraRight, firstCircle, secondCircle, thirdCircle, fourthCircle, fifthCircle, sixthCircle} = product;

  return (
    <>
        <div className='relative w-full'>
            <img className="w-full h-[40vh] lg:h-[48vh] 2xl:h-[30vh]" src={bannerVec} alt='Banner Vector' />
                <div className="px-4 lg:px-[120px] absolute top-1/2 left-1 transform -translate-y-1/2 text-white">
                    <h1 className="text-[32px] font-semibold mt-[-40px]">
                        {title}
                    </h1>
                    <p className="text-[15px] lg:w-[70%] 2xl:w-[50%] mt-6">
                        {description}
                    </p>
                </div>
        </div>
        
        <div className='w-full flex flex-col lg:flex-row lg:px-[151px]'>
            <div className='lg:w-1/2 z-50'>
                <img className='w-72 mx-auto lg:mx-0 h-auto lg:w-[414px] lg:h-[767px] lg:object-cover' src={image} alt={title} />
            </div>
            <div className='px-4 lg:w-1/2 mt-6 lg:mt-[123px]'>
                <p className='text-[35px] text-[#434343] font-semibold'>{secondTitle}</p>
                <p className='mt-6 lg:mt-[39px] text-[15px] text-[#848484] font-normal'>{paraRight}</p>
            </div>
        </div>

        <div className='lg:mt-[-250px]'>
            <div className='absolute right-2 text-right mt-20'><p></p></div>
            <img className='w-full object-cover' src={bannerProductVector} alt='' />
        </div>
    </>
  )
}

export default SinglePageOfProducts