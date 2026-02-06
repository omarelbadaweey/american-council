import React, { useContext, useState } from "react";
import { FaPhone, FaHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import SearchBox from "./SearchBox";

const Header = () => {
  const { favItems } = useContext(CartContext);

  //__open_Menu__//
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //__data_NavBar__//
  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "الكورسات", href: "/courses" },
    { name: "طرق الدفع", href: "/payment" },
    { name: "حجز الكورس", href: "/booking" },
  ];

  return (
    <header
      className={` transition-all duration-300 bg-[#000524] shadow-lg sticky top-0 z-50 `}
    >
      {/* header-1 */}

      <div className="h-[80px] text-yellow-400 flex items-center justify-between px-6  w-[100%] content-center ">
        <Link
          to={"/"}
          className="flex items-center h-full overflow-hidden "
          title="American Council"
        >
          <img
            src="/img/amercan.png "
            className="h-[80px] w-[80px]  object-cover"
            alt="american council logo"
          />
        </Link>

        {/* Search  */}
        <SearchBox />

        <div className="flex items-center gap-5 md:gap-10">
          <div></div>
          <Link
            to={"/favorites"}
            className="cursor-pointer text-yellow-500 hover:text-yellow-600 transition-all duration-300 text-3xl md:text-4xl relative"
          >
            <FaHeart />
            {favItems.length > 0 && (
              <span className="absolute -top-2 bg-white outline-2 outline-yellow-500 w-5 md:w-6 h-5 md:h-6 font-bold rounded-full text-lg md:text-xl flex justify-center items-center">
                {" "}
                {favItems.length}
              </span>
            )}
          </Link>
          <a
            href="tel:+201010098924"
            title="اتصل بنا "
            className="text-2xl hidden md:block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-medium"
          >
            <FaPhone />
          </a>
        </div>
      </div>

      {/* header-2 */}

      <div className=" mx-auto px-4 bg-yellow-400 shadow">
        <div className="flex justify-center items-center text-[#000524]  h-[50px] overflow-hidden">
          <nav
            dir="rtl"
            className="hidden lg:flex h-full items-center space-x-reverse "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className=" hover:text-[#00138d] font-bold transition-colors h-full content-center px-5 duration-300  mx-10"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <button
            className="lg:hidden  flex gap-5 items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <div
              className="cursor-pointer flex flex-col justify-center items-center space-y-1.5"
              aria-label="فتح القائمة"
            >
              <span
                className={`block h-1 w-10 bg-[#000524] transition-all duration-300 ${
                  isMenuOpen ? "rotate-50 translate-y-3 bg-red-700" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-10 bg-[#000524] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-1 w-10 bg-[#000524] transition-all duration-300 ${
                  isMenuOpen ? "-rotate-50 -translate-y-2 bg-red-700" : ""
                }`}
              ></span>
            </div>
            <h3 className={`text-xl ${isMenuOpen ? "text-red-700" : ""}`}>
              {isMenuOpen ? "اضغط لاغلاق القائمه" : "اضغط  لفتح القائمه"}
            </h3>
          </button>
        </div>

        <div
          className={` lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pb-4 border-t border-gray-200 pt-4">
            <div className=" text-center text-xl flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-[#000524]  transition-colors duration-300 py-2 px-4 rounded-lg  font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href="tel:+201010098924"
                className="flex justify-center text-2xl bg-[#000524] text-yellow-400 px-6 py-3 rounded-lg  transition-colors duration-300 font-medium mt-2"
              >
                <FaPhone />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
