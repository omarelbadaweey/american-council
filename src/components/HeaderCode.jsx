import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function HeaderCode() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const navLinks = [
    { name: "تواصل معنا", href: "contact" },
    { name: "أعمالنا", href: "portfolio" },
    { name: "من نحن", href: "about" },
    { name: "خدماتنا", href: "services" },
    { name: "الرئيسية", href: "home" },
  ];

  return (
    <header
      dir="ltr"
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-2 bg-[#020817]/80 backdrop-blur-xl border-b border-white/10 `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-x-3 rounded-full overflow-hidden">
          <Link
            to="/american-code"
            className="w-16 h-16 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.3)]"
          >
            <img
              src="/img/code-logo.png"
              className="object-cover"
              alt="American Software Logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <ScrollLink
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              key={link.name}
              to={link.href}
              activeClass="text-yellow-400"
              className="text-sm cursor-pointer font-bold hover:text-[#f7b500] transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}

        </nav>

        {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-5">
                    <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={32} className="text-red-700" />
          ) : (
            <Menu size={30} />
          )}
        </button>

          <button onClick={() => navigate("/")} className="cursor-pointer bg-[#f7b500] text-[#020817] px-4 md:px-7 py-1.5 md:py-2 rounded-xl font-black text-sm hover:scale-105 transition-all">
            <FaArrowAltCircleRight size={18}/>
          </button>
          </div>

        
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed md:hidden z-100 inset-y-0 top-20 h-screen right-0 w-full sm:w-80 bg-[#020817]  transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out border-l border-white/10 p-8 `}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <ScrollLink
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg cursor-pointer font-semibold hover:bg-black/50 hover:text-yellow-400 border-2 hover:border-yellow-400 border-blue-400 rounded-3xl py-2"
              activeClass="text-yellow-400 bg-black/50 border-yellow-400"
            >
              {link.name}
            </ScrollLink>
          ))}
          <a href="https://api.whatsapp.com/send/?phone=201098825176&text&type=phone_number&app_absent=0" className="mt-2 hover:bg-black border-2 content-center border-blue-400 hover:border-yellow-400 hover:text-yellow-400 text-white p-3 rounded-3xl font-black text-xl">
            طلب استشارة
          </a>
        </nav>
      </aside>
    </header>
  );
}
export default HeaderCode;
