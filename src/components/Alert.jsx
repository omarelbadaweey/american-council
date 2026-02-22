import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react"; 

const Alert = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center text-center">
      
      {showAlert && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#000524] border-2 border-[#ffcc00] rounded-2xl p-8 shadow-[0_0_50px_rgba(255,204,0,0.2)] transform animate-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setShowAlert(false)}
              className="cursor-pointer absolute top-4 left-4 text-[#ffcc00] hover:text-white transition-colors p-1"
            >
              <X size={28} />
            </button>

            <div className="text-right flex flex-col items-end">
              <span className="bg-[#ffcc00] text-[#000814] px-3 py-1 rounded-md font-bold text-xs mb-4">
                عرض خاص لفترة محدودة
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                ابدأ رحلتك الرقمية معنا اليوم!
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                هل تبحث عن تصميم متجر إلكتروني أو تطبيق موبايل؟ نحن هنا لنحول رؤيتك إلى واقع بأحدث التقنيات العالمية.
              </p>
              
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => { setShowAlert(false); }}
                  className="cursor-pointer flex-1 bg-[#ffcc00] text-[#000814] font-bold py-3 rounded-lg hover:bg-white transition-all active:scale-95"
                >
                  <a href="https://api.whatsapp.com/send/?phone=201098825176&text&type=phone_number&app_absent=0"> احصل على استشارة</a>
                </button>
                <button
                  onClick={() => { setShowAlert(false), navigate("/american-code");} }
                  className="cursor-pointer px-6 border border-gray-500 text-gray-400 py-3 rounded-lg hover:text-white hover:border-white transition-all"
                >
                  مشاريعنا 
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Alert;