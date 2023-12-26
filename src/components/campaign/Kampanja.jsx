import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import floilMaster1 from "../assets/211.jpg";
import floilMaster2 from "../assets/IMG_01622217.jpg";
import floilMaster3 from "../assets/IMG_016227.jpg";

const Kampanja = () => {
  const images = [floilMaster1, floilMaster2, floilMaster3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col lg:flex-row mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="px-4 lg:px-[70px] lg:w-1/2 flex justify-center flex-col font-sans"
      >
        <h2 className="text-xl lg:text-[35px] text-[#212529] mb-2 font-semibold">Kampanja "Blej me zemër!"</h2>
        <motion.p
          className="text-[13px] text-[#848484] font-light mt-8"
        >
          Kompania e vajit Floil lansoi kampanjën Blej me zemër! në prill të vitit 2023, kësaj radhe me fokus në prodhimin vendor. Floil ka kënaqësinë të prezantojë kampanjën #Blejmezemër, në kuadër të së cilës synimi kryesor është promovimi i vajit të vetëm që është prodhim 100% vendor.
        </motion.p> <br /> 
        <motion.p
          className="text-[13px] text-[#848484] font-light"
        >
          Por çfarë e bën vajin e lulediellit të Floil të dallohet nga të tjerët? Si fillim, ai prodhohet me kujdes dhe vëmendje ndaj detajeve, duke përdorur vetëm përbërës të cilësisë më të lartë. Dhe për shkak se është prodhim vendor, vaji është gjithmonë i freskët, duke siguruar shijen dhe vlerat më të mira ushqyese.
        </motion.p>
      </motion.div>
      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Kampanja;
