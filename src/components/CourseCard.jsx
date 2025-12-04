import React, { useContext, useState } from "react";
import { FaCheck, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { FaXmark } from "react-icons/fa6";

const CourseCard = ({ course }) => {
  const { addToFavorite, favItems, removeFromFav } = useContext(CartContext);

  //
  const isInFav = favItems.some((c) => c.id === course.id);

  //
  const [openToast, setOpenToast] = useState(false);
  const [closeToast, setCloseToast] = useState(false);
  const handelAdd = () => {
    if (isInFav) {
      removeFromFav(course.id);
      setCloseToast(true);
      setTimeout(() => {
        setCloseToast(false);
      }, 1500);
    } else {
      addToFavorite(course);
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 1500);
    }
  };

  //

  return (
    <section>
      <div
        dir="rtl"
        className=" min-h-[400px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      >
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="w-full h-48 object-cover"
          />
          <button
            onClick={handelAdd}
            className={` cursor-pointer absolute top-4 right-3 text-3xl border-3 p-1 rounded-full border-yellow-500 bg-white text-yellow-500 ${
              isInFav ? "" : " animate-bounce"
            }`}
          >
            {isInFav ? <FaHeart /> : <FaRegHeart />}
          </button>
          <div className="absolute top-4 left-4 bg-[#000524] text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
            {course.duration}
          </div>

          {/* openToast */}
          {openToast && (
            <div className="text-center absolute h-14 top-0 content-center  left-0 mx-auto w-full z-10 py-2 bg-[#000524] border-b-3 border-yellow-500 ">
              <p className="flex items-center gap-5 justify-center text-white">
                تمت اضافته للمفضله{" "}
                <span className="p-1 rounded-full border-2 border-amber-50">
                  <FaCheck />
                </span>
              </p>
            </div>
          )}

          {/* closeToast */}
          {closeToast && (
            <div
              className={`absolute h-14 content-center top-0  left-0 w-full z-10 py-2 bg-white border-red-600 border-b-3`}
            >
              <p className="flex items-center gap-5 justify-center text-red-700">
                تمت ازالته من المفضله{" "}
                <span className="p-1 rounded-full border-2 border-red-700">
                  <FaXmark  />
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-[#000524] mb-3 text-over-flow">
            {course.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 text-over-flow">
            {course.description}
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-[#000524] mb-2">
              المحتوى الأساسي:
            </h4>
            <div className="flex flex-wrap gap-1 text-over-flow">
              {course.content.slice(0, 3).map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                >
                  {item}
                </span>
              ))}
              {course.content.length > 3 && (
                <span className="bg-blue-100 text-[#000524] px-2 py-1 rounded text-xs">
                  +{course.content.length - 3} أكثر
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p className=" font-semibold text-lg text-[#000524] ">
              سعر الماده العلميه
            </p>
            <span
              dir="ltr"
              className="ml-5 text-yellow-400 text-lg font-bold underline"
            >
              {" "}
              {course.materialPrice} <span className="text-[#000524] ">LE</span>
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span dir="ltr" className="  font-semibold text-lg text-[#000524]">
              سعر الكورس
            </span>
            <span
              dir="ltr"
              className=" text-yellow-400 text-lg font-bold underline"
            >
              {" "}
              {course.price}{" "}
            </span>
            <Link
              to={`/courses/${course.id}`}
              className="bg-[#000524] text-yellow-400 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-[#000524] border-2 border-[#000524] transition-colors"
            >
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
