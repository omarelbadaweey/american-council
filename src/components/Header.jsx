

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'الخدمات', href: '/services' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">

          <div className="flex items-center" title='American Council'>
            <img src="/img/logo.png" className='w-18  ' alt="american council logo" />
          </div>


          <nav dir='rtl' className="hidden md:flex  space-x-reverse">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-400 transition-colors duration-300 font-medium mx-10"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

 
          <a href='tel:01008790584' title='اتصل بنا ' className="text-xl hidden md:block bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300 font-medium">
         📞
          </a>


          <button
            onClick={toggleMenu}
            className="cursor-pointer md:hidden flex flex-col justify-center items-center space-y-2"
            aria-label="فتح القائمة"
          >
            <span
              className={`block h-1 w-12 bg-blue-400 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-5 bg-red-700' : ''
              }`}
            ></span>
            <span
              className={`block h-1 w-12 bg-blue-400 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block h-1 w-12 bg-blue-400 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-0.5 bg-red-700' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* القائمة المنزلقة - للشاشات الصغيرة */}
        <div
          className={` md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pb-4 border-t border-gray-200 pt-4">
            <div className=" text-center flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <a  href='tel:01008790584' className="text-center text-xl bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 font-medium mt-2">
                 📞
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;