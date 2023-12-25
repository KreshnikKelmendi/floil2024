import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "./assets/floilLogo.png";
import menu from "./assets/icons8-hamburger-menu-24.png";

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
          {isMenuOpen ? 'Close' : <img src={menu} alt="" />}
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="lg:flex block fixed top-0 right-0 h-full w-1/2 z-50 bg-[#DEB34C] text-white overflow-y-auto"
            >
              <div className={`lg:flex lg:items-center lg:justify-end ${isMenuOpen ? 'hidden' : 'lg:block'}`}>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.1 } },
                  }}
                  className={`lg:flex ${isMenuOpen ? 'hidden' : 'lg:flex'} lg:space-x-[41px]`}
                >
                  <motion.li variants={{ visible: { y: 0 } }}>
                    <Link to="/produktet-tona" className="text-white">Produktet</Link>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.1 } }}>
                    <Link to="/historiku" className="text-white">Historiku</Link>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.2 } }}>
                    <Link to="/rafineria-floil" className="text-white">Rafineria</Link>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.3 } }}>
                    <a href="#" className="text-white">Receta Gatimi</a>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.4 } }}>
                    <Link to="/kontakti" className="text-white">Kontakti</Link>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.5 } }}>
                    <a href="#" className="text-white">Floil Cares</a>
                  </motion.li>
                </motion.ul>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <button
                  className="absolute top-4 right-4 text-white text-xl lg:hidden focus:outline-none"
                  onClick={toggleMenu}
                >
                  X
                </button>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.1 } },
                  }}
                  className={`lg:hidden ${isMenuOpen ? 'flex uppercase flex-col space-y-10 text-center p-4' : 'hidden'}`}
                >
                  <motion.li variants={{ visible: { y: 0 } }}>
                    <Link to="/produktet-tona" className="text-white font-sans font-semibold">Produktet</Link>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.1 } }}>
                    <Link to="/historiku" className="text-white font-sans font-semibold">Historiku</Link>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.2 } }}>
                    <Link to="/rafineria-floil" className="text-white font-sans font-semibold">Rafineria</Link>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.3 } }}>
                    <a href="#" className="text-white font-sans font-semibold">Receta Gatimi</a>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.4 } }}>
                    <Link to="/kontakti" className="text-white font-sans font-semibold">Kontakti</Link>
                  </motion.li>
                  <motion.li variants={{ visible: { y: 0.5 } }}>
                    <a href="#" className="text-white font-sans font-semibold">Floil Cares</a>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
