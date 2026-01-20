import React from 'react';
import { useNavigate } from 'react-router-dom';

const SoftwareCompanySection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000814] font-sans text-white w-full">
      <section className="relative flex flex-col items-center text-center">
        
        <div className="relative w-full border-y-4 border-[#ffcc00] overflow-hidden shadow-2xl bg-[#001d3d]">
          <div className="flex flex-col md:flex-row-reverse items-center"> 
            
            <div className="w-full md:w-1/2 h-64 md:h-96 bg-[#000814] relative">
               <div className="absolute inset-0 bg-gradient-to-l from-[#001d3d] to-transparent z-10"></div>
               <img 
                src="/img/code.avif" 
                alt="Programming and Coding" 
                className="w-full h-full object-cover opacity-50"
               />
            </div>

            <div className="w-full md:w-1/2 p-8 text-right flex flex-col items-end">
              <span className="bg-[#ffcc00] text-[#000814] px-4 py-1 rounded-full font-bold text-sm mb-4">
                خدماتنا الاحترافية
              </span>
              <h2 className="text-3xl font-bold mb-4">تصميم وتطوير المواقع والتطبيقات</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                نحول أفكارك إلى واقع رقمي مبهر. متخصصون في بناء المتاجر الإلكترونية، 
                الأنظمة الإدارية، وتطبيقات (iOS & Android) بأحدث التقنيات العالمية لضمان السرعة والأمان.
              </p>
              
              <ul className="text-right text-sm text-[#ffcc00] mb-8 grid grid-cols-2 gap-2">
                <li className="flex items-center justify-end gap-2">تطبيقات موبايل ⚡</li>
                <li className="flex items-center justify-end gap-2">مواقع تعريفيّة ⚡</li>
                <li className="flex items-center justify-end gap-2">متاجر إلكترونية ⚡</li>
                <li className="flex items-center justify-end gap-2">دعم فني متواصل ⚡</li>
              </ul>
              
              <button 
                onClick={() => navigate('/american-code')} 
                className="bg-[#ffcc00] cursor-pointer text-[#000814] hover:bg-white transition-all duration-300 font-black py-4 px-12 rounded-xl text-xl shadow-lg transform hover:-translate-y-1"
              >
                ابدأ مشروعك الآن
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareCompanySection;