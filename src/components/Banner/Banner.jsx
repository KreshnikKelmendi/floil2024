// Banner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import banner from "../assets/Maskgroup.png";
import additionalImage from "../assets/flowerTree.png";

const Banner = () => {
  return (
    <motion.div className="relative h-[19vh] md:h-full">
      {/* Main banner image with animation */}
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="object-cover w-full h-full"
        src={banner}
        alt="Banner"
      />

      {/* Overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      {/* Text to the left */}
      <div className="z-40 absolute left-[70px] lg:left-[124px] top-1/2 transform -translate-y-1/2 text-white">
        <p className="text-[15px] lg:text-[40px] leading-[118%] font-semibold text-[#434343]">Nga fusha e luleve, <br />drejt tryezës tuaj!</p>
        <button className="bg-[#DEB34C] text-white border-2 border-[#DEB34C] rounded-[4px] hover:text-[#DEB34C] hover:bg-white hover:border-none text-[12px] lg:text-[15px] w-[148px] lg:w-fit lg:px-[26px] py-1 lg:py-2 mt-[19px]">Shiko produktin</button>
      </div>

      {/* Additional image with animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-274px"
      >
        <img
          className="lg:w-[456px] w-44 h-auto lg:h-[440px] photo2"
          src={additionalImage}
          alt="Additional Image"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
