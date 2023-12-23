import React from 'react';
import floil from "../assets/Floik_Bottle.png"
import rapsol from "../assets/FLOIL-RAPSEED.png"
import margarine from "../assets/butter_package.png"

const Product = () => {
  const products = [
    {
      id: 1,
      title: 'Vaj Luledielli',
      image: floil
    },
    {
      id: 2,
      title: 'Vaj Rapsol',
      image: rapsol
    },
    {
      id: 3,
      title: 'Margarinë',
      image: margarine
    },
  ];

  return (
    <div>
      <div className='w-full text-center font-sans'>
        <p className='lg:w-[30%] mt-20 mx-auto text-[30px] font-medium text-[#434343]'>
          Të gjitha produktet Floil janë 100% vendore
        </p>
        <p className='mt-6 lg:w-[40%] mx-auto'>
          Produktet 100% vendore Floil prodhohen sipas të gjitha kritereve të cilësisë në përputhje me standardet botërore
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 justify-center mt-8'>
        {products.map((product) => (
          <div key={product.id} className='m-4 rounded-md overflow-hidden'>
            <div className='bg-[#F6F6F6] p-4 h-[379px]'>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-80 object-contain mb-2 rounded-md'
              />
            </div>
            <div className='bg-[#F3C24E] h-[78px] items-center px-4 justify-between flex text-white'>
              <button className='border-[2px] border-white p-[6px] hover:bg-white rounded-md hover:text-[#F3C24E] font-sans'>Shiko produktin</button>
              <p className='text-center font-sans font-extrabold'>{product.title}</p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
