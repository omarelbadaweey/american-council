import React, { useContext } from "react";

import { CartContext } from "../components/context/CartContext";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";
import Transition from "../components/Transition";
import { Helmet } from "react-helmet";
import Back from "../components/Back";
function Favorites() {
  const { favItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <Transition>
      <Helmet>
        <title>قائمة المفضلة - American Council</title>
        <meta
          name="description"
          content="قائمة الكورسات المفضلة لديك في American Council - احفظ الكورسات التي تعجبك وعد لها لاحقاً. إدارة سهلة للمفضلة"
        />
        <meta
          name="keywords"
          content="المفضلة, كورسات مفضلة, حفظ كورسات, American Council, قائمة المفضلة, wishlist"
        />
        <meta property="og:title" content="قائمة المفضلة - American Council" />
        <meta
          property="og:description"
          content="احفظ الكورسات المفضلة لديك وعد لها لاحقاً"
        />
      </Helmet>
      <Back />
      {favItems.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center h-[80vh] text-center px-4"
          dir="rtl"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-[rgb(0,5,36)] to-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <div className="w-16 h-16 bg-white rounded-full shadow-md"></div>
          </div>

          {/* النص */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            قائمة المفضلة فارغة
          </h2>

          <button
            onClick={() => navigate("/courses")}
            className=" cursor-pointer px-6 py-3 bg-[#000524] text-yellow-400 rounded-xl shadow-md border-3 border-yellow-400 transition"
          >
            أضف كورسات
          </button>
        </div>
      ) : (
        <div className="mt-5 my-15">
          <h2 className=" relative w-fit mx-auto before:w-full before:bg-blue-400 before:h-1 before:absolute before:-bottom-5  after:w-7 after:h-7 after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-[50%] after:right-[50%]  after:rounded-full after:bg-white after:border-3 text-4xl font-bold text-[#002c5c] text-center mb-12">
            {" "}
            ({favItems.length}) المفضله
          </h2>
          <div className="px-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {favItems.map((course) => (
              <CourseCard course={course} />
            ))}
          </div>
        </div>
      )}
    </Transition>
  );
}

export default Favorites;
