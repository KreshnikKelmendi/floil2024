import React from 'react';
import footerBackgroundImage from '../assets/footerImage.png';
import endImage from '../assets/floilLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="relative py-6 px-4 md:py-16 mt-20 md:px-[120px]">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={footerBackgroundImage}
        alt=""
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row">
        {/* Menu Links Section */}
        <div className="md:w-full mb-6 md:mb-0">
          <ul className="list-none p-0 font-sans font-bold leading-6 text-[13px]">
            <Link to="/produktet-tona" onClick={() => window.scrollTo({top: 0,left: 0})}><li className="block mb-2 md:mb-1 text-white">Produktet</li></Link>
            <Link to="/historiku" onClick={() => window.scrollTo({top: 0,left: 0})}><li className="block mb-2 md:mb-1 text-white">Historiku</li></Link>
            <Link to="/rafinera-floil" onClick={() => window.scrollTo({top: 0,left: 0})}><li className="block mb-2 md:mb-1 text-white">Rafineria</li></Link>
            <Link to="/recetat" onClick={() => window.scrollTo({top: 0,left: 0})}><li className="block mb-2 md:mb-1 text-white">Receta Gatimi</li></Link>
            <Link t="/kontakti" onClick={() => window.scrollTo({top: 0,left: 0})}><li className="block mb-2 md:mb-1 text-white">Kontakti</li></Link>
            <Link to="/floil-cares" onClick={() => window.scrollTo({top: 0,left: 0})}><li className="block mb-2 md:mb-1 text-white">Floil Cares</li></Link>
          </ul>
        </div>

        {/* List Section */}
        <div className="md:w-full lg:ml-28 mb-6 md:mb-0">
          <ul className="list-none p-0 font-sans font-bold leading-6 text-[13px]">
            <Link to="/rafineria-floil" onClick={() => window.scrollTo({top: 0,left: 0})}><li className="block mb-2 md:mb-1 text-white">Rafineria</li></Link>
            <li className="block mb-2 md:mb-1 text-white">Neutralizimi</li>
            <li className="block mb-2 md:mb-1 text-white">Zbardhimi</li>
            <li className="block mb-2 md:mb-1 text-white">Kristalizimi</li>
            <li className="block mb-2 md:mb-1 text-white">Deodorizimi</li>
            <li className="block mb-2 md:mb-1 text-white">Metodologjitë</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:w-full lg:ml-28">
          <ul className="list-none p-0 font-sans font-bold leading-6 text-[13px]">
            <li className="block mb-2 md:mb-1 text-white">Kontakti</li>
            <li className="block mb-2 md:mb-1 text-white">Velekincë 60000, Gjilan, Kosovë</li>
            <li className="block mb-2 md:mb-1 text-white">info@fluidigroup.com</li>
            <li className="block mb-2 md:mb-1 text-white">+383 44 456 789</li>
            <div className='flex text-white gap-x-4 cursor-pointer'>
           
                  <a href="https://www.facebook.com/floilofficial" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f text-xl"></i></a>
                  <a href="https://www.instagram.com/floilofficial/" target="_blank" rel="noreferrer"><i className="fab fa-instagram text-xl"></i></a>
               
            </div>
          </ul>
        </div>

        {/* Image Logo Section */}
        <div className="md:w-full lg:ml-28 flex justify-center items-center">
          <img className="w-[132px] h-[73px] object-cover" src={endImage} alt="" />
        </div>
      </div>
    </div>

    <div className='w-full flex flex-col lg:flex-row justify-between text-white items-center h-[50px] lg:px-[120px] bg-[#DEB34C]'>
        <p>© Copyright 2023, Floil</p>
        <p>Powered by: Trekuartista</p>
    </div>
    </>
  );
};

export default Footer;
