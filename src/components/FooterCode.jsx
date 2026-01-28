import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

function FooterCode() {
      const [showBtn, setShowBtn] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 150) {
            setShowBtn(true);
          } else {
            setShowBtn(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const backtop = () => {
        window.scroll({ top: 0, behavior: "smooth" });
      };
  return (
      <footer className="py-12 border-t border-white/10 px-6 text-center">
              {showBtn && (
                <button
                  onClick={backtop}
                  id="backTop"
                  className="flex justify-center text-2xl items-center animate-bounce fixed bottom-6 right-6 bg-[#000524] text-yellow-400 w-[50px] h-[50px] rounded-full shadow-lg border-3 border-yellow-400 outline-4 outline-[#000524] transition-opacity  z-50 cursor-pointer"
                >
                  <FaArrowUp />
                </button>
              )}
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
             <span className="text-2xl font-black italic">AMERICAN <span className="text-[#f7b500]">COUNCIL</span></span>
          </div>
          <div className="flex gap-10 text-slate-500 font-bold text-sm">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://github.com/omarelbadaweey" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <p className="text-slate-600 text-xs tracking-widest uppercase">© 2026 American Council Tech. Developed for the Future.</p>
        </div>
      </footer>  )
}

export default FooterCode