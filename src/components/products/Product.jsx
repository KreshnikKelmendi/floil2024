import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import floil from "../assets/Floik_Bottle.png";
import rapsol from "../assets/FLOIL-RAPSEED.png";
import margarine from "../assets/butter_package.png";

const Product = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

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
        <p className='mt-6 px-1 lg:px-0 lg:w-[40%] mx-auto'>
          Produktet 100% vendore Floil prodhohen sipas të gjitha kritereve të cilësisë në përputhje me standardet botërore
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 justify-center mt-8'>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            ref={ref}
            className='m-4 rounded-md overflow-hidden'
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className='bg-[#F6F6F6] p-4 h-[379px]'
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-80 object-contain mb-2 rounded-md'
              />
            </motion.div>
            <motion.div
              className='bg-[#F3C24E] h-[78px] items-center px-4 justify-between flex text-white'
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2 }}
            >
              <button className='border-[2px] border-white p-[6px] hover:bg-white rounded-md hover:text-[#F3C24E] font-sans'>
                Shiko produktin
              </button>
              <p className='text-center font-sans font-extrabold'>{product.title}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Product;
