import React from 'react';
import bannerVec from "../components/assets/bannerVector.png";
import Product from '../components/products/Product';

const ProductPage = () => {
  return (
    <>
    <div className='relative w-full'>
      <img className="w-full h-[40vh] lg:h-[48vh] 2xl:h-[30vh]" src={bannerVec} alt='Banner Vector' />
      <div className="px-4 lg:px-[120px] absolute top-1/2 left-1 transform -translate-y-1/2 text-white">
        <h1 className="text-[32px] font-semibold mt-[-40px]">Produktet tona</h1>
        <p className="text-[15px] lg:w-[70%] 2xl:w-[50%] mt-6">
          Në Floil gjithmonë sigurohemi që të ofrojmë vetëm produkte të cilësisë më të lartë për klientët tanë.
          Vaji i lulediellit, vaji rapsol, dhe gjalpi prodhohen të gjitha duke përdorur përbërësit më të mirë dhe masat më rigoroze të kontrollit të cilësisë.
          Ne jemi të përkushtuar t'u ofrojmë klientëve tanë produkte që jo vetëm kanë shije të shkëlqyer, por edhe që plotësojnë standardet më të larta për pastërtinë dhe vlerën ushqyese.
        </p>
      </div>
    </div>
    <Product />
    </>
  );
}

export default ProductPage;
