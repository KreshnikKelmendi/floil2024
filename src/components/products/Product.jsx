import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const Product = () => {

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
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className='m-4 rounded-md overflow-hidden'
    >
      <div className='bg-[#F6F6F6] p-4 h-[379px]'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-80 object-contain mb-2 rounded-md'
        />
      </div>
      <div className='bg-[#F3C24E] h-[78px] items-center px-4 justify-between flex text-white'>
            <Link to={`/produktet-tona/${product.id}`} onClick={() => window.scrollTo({top: 0, left: 0})}>
                <button className='border-[2px] border-white p-[6px] hover:bg-white rounded-md hover:text-[#F3C24E] font-sans font-semibold'>Shiko produktin</button>
            </Link>
        <p className='text-center font-sans font-extrabold'>{product.title}</p>
      </div>
    </motion.div>
  );
};

export default Product;
