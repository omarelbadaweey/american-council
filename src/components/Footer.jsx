import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

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
          className="flex justify-center text-2xl items-center animate-bounce fixed bottom-6 right-6 bg-[#000524] text-yellow-400 w-[50px] h-[50px] rounded-full shadow-lg border-3 border-yellow-400 outline-4 outline-[#000524] transition-opacity  z-50 cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
      <footer dir="rtl" className="bg-[#000524] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                المجلس الأمريكي
              </h3>
              <p className="text-gray-300">للتدريب والبرمجيات</p>
              <p className="text-gray-400 mt-2">
                ترخيص وزارة الاتصالات مركز تكنولوجيا المعلومات
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">روابط سريعة</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-300 hover:text-yellow-400"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-gray-300 hover:text-yellow-400"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/courses"}
                    className="text-gray-300 hover:text-yellow-400"
                  >
                    الكورسات
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/booking"}
                    className="text-gray-300 hover:text-yellow-400"
                  >
                    حجز الكورس
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">معلومات الاتصال</h3>
              <a 
              href="https://api.whatsapp.com/send/?phone=201095922032&text&type=phone_number&app_absent=0"
              className="text-yellow-400 hover:underline">
                {" "}
                تواصل معنا{" "}
              </a>
              <p className="text-gray-300 my-2">
                العنوان : جامعه المنصوره كلية الهندسة{" "}
              </p>
              <p className="text-gray-300">تحت اشراف : د/ آية الملاح</p>
            </div>
          </div>

          <div className="border-t border-yellow-400 mt-8 pt-6 text-center">
            <p className="text-gray-400">
              <span className="text-yellow-400"> ©</span> 2025 جميع الحقوق
              محفوظة لدى المجلس الأمريكي للتدريب والبرمجيات
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
