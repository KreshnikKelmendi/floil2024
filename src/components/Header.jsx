// src/components/Header.jsx
import React, { useState } from 'react';
import logo from "./assets/floilLogo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#DEB34C] h-[100px] px-5 lg:px-[124px] font-sans text-[15px] font-normal">
      <div className="flex items-center justify-between h-full">
        <Link to="/"><img src={logo} alt='' className='w-[77px] h-[43px] object-cover' /></Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={`lg:flex ${isMenuOpen ? 'block fixed top-0 right-0 h-full w-1/2 z-50 bg-[#DEB34C] text-white overflow-y-auto transform translate-x-0' : 'hidden'}`}>
          <div className={`lg:flex lg:items-center lg:justify-end ${isMenuOpen ? 'hidden' : 'lg:block'}`}>
            <ul className={`lg:flex ${isMenuOpen ? 'hidden' : 'lg:flex'} lg:space-x-[41px]`}>
              <li><Link to="/produktet-tona" className="text-white">Produktet</Link></li>
              <li><Link to="/historiku" className="text-white">Historiku</Link></li>
              <li><Link to="/rafineria-floil" className="text-white">Rafineria</Link></li>
              <li><a href="#" className="text-white">Receta Gatimi</a></li>
              <li><Link to="/kontakti" className="text-white">Kontakti</Link></li>
              <li><a href="#" className="text-white">Floil Cares</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <button
              className="absolute top-4 right-4 text-white text-xl lg:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              X
            </button>
            <ul className={`lg:hidden ${isMenuOpen ? 'flex flex-col space-y-4 p-4' : 'hidden'}`}>
              <li><Link to="/produktet-tona" className="text-white">Produktet</Link></li>
              <li><Link to="/historiku" className="text-white">Historiku</Link></li>
              <li><Link to="/rafineria-floil" className="text-white">Rafineria</Link></li>
              <li><a href="#" className="text-white">Receta Gatimi</a></li>
              <li><Link to="/kontakti" className="text-white">Kontakti</Link></li>
              <li><a href="#" className="text-white">Floil Cares</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
