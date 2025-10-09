import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <>
      {showBtn && (
        <button
          onClick={backtop}
          id="backTop"
          className="animate-bounce fixed bottom-6 right-6 bg-blue-400 text-white w-[50px] h-[50px] rounded-full shadow-lg border-3 border-white outline-4 outline-blue-400 transition-opacity  z-50 cursor-pointer"
        >
          <i className="fas fa-chevron-up text-xl"></i>
        </button>
      )}
      <footer dir="rtl" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">المجلس الأمريكي</h3>
              <p className="text-gray-300">للتدريب والبرمجيات</p>
              <p className="text-gray-400 mt-2">
                ترخيص وزارة الاتصالات مركز تكنولوجيا المعلومات
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={"/"} className="text-gray-300 hover:text-white">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-300 hover:text-white"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services"}
                    className="text-gray-300 hover:text-white"
                  >
                    الخدمات
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">معلومات الاتصال</h3>
              <Link to={"/contact"} className="text-blue-400 hover:underline">
                {" "}
                تواصل معنا{" "}
              </Link>
              <p className="text-gray-300 my-2">
                العنوان : كلية الهندسة جامعه المنصوره{" "}
              </p>
              <p className="text-gray-300">الدكتور/ آية الملاح</p>
            </div>
          </div>

          <div  className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400">
            <span className="text-blue-400"> ©</span> 2025 جميع الحقوق محفوظة لدى المجلس الأمريكي للتدريب والبرمجيات  
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
