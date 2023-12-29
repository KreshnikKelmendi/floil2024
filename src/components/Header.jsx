// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "./assets/floilLogo.png";
import menu from "./assets/icons8-hamburger-menu-24.png";
import caresLogo from "./assets/Layer_1.png"
import anotherMenuImage from "./assets/menu-bar.png"

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0 });
    
  };

  return (
    <header className={`h-[100px] px-5 lg:px-[124px] font-sans text-[15px] font-normal ${
        location.pathname === '/floil-cares' ? 'bg-white' : 'bg-[#DEB34C]'
    }`}>
      <div className="flex items-center justify-between h-full">
      <Link to="/" onClick={handleLinkClick}><img src={location.pathname === '/floil-cares' ? caresLogo : logo} alt='' className='w-[77px] h-auto' /></Link>
      <button
            className="lg:hidden text-white w-5 h-auto focus:outline-none"
            onClick={toggleMenu}
        >
            {isMenuOpen ? 'Close' : (
        <img
            src={location.pathname === '/floil-cares' ? anotherMenuImage : menu}
            alt=""
        />
        )}
        </button>

        <nav className={`lg:flex ${isMenuOpen ? 'block fixed top-0 right-0 h-full w-1/2 z-50 text-white overflow-y-auto transform translate-x-0' : 'hidden'} ${location.pathname === '/floil-cares' ? 'bg-white' : 'bg-[#DEB34C]'}`}>
          <div className={`lg:flex lg:items-center lg:justify-end ${isMenuOpen ? 'hidden' : 'lg:block'}`}>
            <ul className={`lg:flex ${isMenuOpen ? 'hidden' : 'lg:flex'} lg:space-x-[41px]`}>
              <li><Link to="/produktet-tona" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Produktet</Link></li>
              <li><Link to="/historiku" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Historiku</Link></li>
              <li><Link to="/rafineria-floil" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Rafineria</Link></li>
              <li><Link to="/recetat" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Receta Gatimi</Link></li>
              <li><Link to="/kontakti" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Kontakti</Link></li>
              <li>
                <Link
                  to="/floil-cares"
                  onClick={handleLinkClick}
                  className={`text-white border-[2px] rounded-md py-2 px-8 hover:bg-[#60C5EF] hover:text-black hover:border-[#60C5EF] ${
                    location.pathname === '/floil-cares' ? 'hidden' : ''
                  }`}
                >
                  Floil Cares
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <button
             
              className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] absolute top-4 right-4 font-semibold lg:hidden': 'absolute top-4 right-4 text-white text-xl lg:hidden focus:outline-none'}`}
              onClick={toggleMenu}
            >
              X
            </button>
            <ul className={`lg:hidden ${isMenuOpen ? 'flex uppercase flex-col space-y-10 text-center p-4' : 'hidden'}`}>
              <li><Link to="/produktet-tona" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Produktet</Link></li>
              <li><Link to="/historiku" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Historiku</Link></li>
              <li><Link to="/rafineria-floil" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-bold'}`}>Rafineria</Link></li>
              <li><Link to="/recetat" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Receta Gatimi</Link></li>
              <li><Link to="/kontakti" onClick={handleLinkClick} className={`${location.pathname === '/floil-cares' ? 'text-[#60C5EF] font-semibold': 'text-white font-semibold'}`}>Kontakti</Link></li>
              <li>
                <Link
                  to="/floil-cares"
                  onClick={handleLinkClick}
                  className={`text-white border-[2px] rounded-md py-2 px-8 border-white hover:bg-[#60C5EF] hover:text-black hover:border-[#60C5EF] ${
                    location.pathname === '/floil-cares' ? 'hidden' : ''
                  }`}
                >
                  Floil Cares
                </Link> 
              </li>
            </ul>
            <div className='lg:hidden flex text-white gap-x-6 mt-10 cursor-pointer'>
           
                  <a href="https://www.facebook.com/floilofficial" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f text-2xl"></i></a>
                  <a href="https://www.instagram.com/floilofficial/" target="_blank" rel="noreferrer"><i className="fab fa-instagram text-2xl"></i></a>
               
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
