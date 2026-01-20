// import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import coursesData from "../data.json";
import Transition from "../components/Transition";
import { useContext } from "react";
import { CartContext } from "../components/context/CartContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
// import ShowAlert from "../components/ShowAlert";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = coursesData;
  const course = courses.find((c) => c.id === parseInt(id));

  const navigate = useNavigate();

  const { addToFavorite, favItems, removeFromFav } = useContext(CartContext);

  const isInFav = favItems.some((c) => c.id === course.id);

  //
  const handelAdd = () => {
    toast.dismiss()
    if (isInFav) {
      removeFromFav(course.id);
          toast.error("تمت الإزالة من المفضلة ❌");

    } else {
      addToFavorite(course);
       toast.success("تمت الإضافة إلى المفضلة 💚");
    }
  };
  if (!course) {
    return (
      <div className="h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            حدث خطا ف جلب بيانات الكورس يرجى اعاده المحاوله ف وقت لاحق{" "}
          </h2>
          <Link
            to="/"
            className="bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Transition>
        {/* <Helmet>
        <title>Course Details</title>
        <meta name="description" content="Course Details" />
        <meta name="keywords" content="Course Details" />
      </Helmet> */}

          <Helmet>
  <title>اسم الكورس - American Council</title>
  <meta name="description" content="تفاصيل كورس [اسم الكورس] في American Council - محتوى, مدة, سعر, ومعلومات التسجيل" />
  <meta name="keywords" content="كورس [اسم الكورس], تفاصيل, محتوى, سعر, American Council" />
</Helmet>

      {/* <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert} course={course}/> */}
      <div className=" py-8 bg-gray-300">
        <div className="container mx-auto px-4 ">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-yellow-400 outline-3 outline-[#000524]">
            <div className="md:flex ">
              <div className="md:flex-1 h-[500px]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div dir="rtl" className="md:flex-1 p-8 ">
                <h1 className=" text-2xl md:text-3xl font-bold text-[#000524] mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {course.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 w-32">
                      مدة التدريب:
                    </span>
                    <span className="text-yellow-400 font-bold">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="font-semibold text-gray-700 w-32">
                      سعر الكورس:
                    </span>
                    <span
                      dir="ltr"
                      className=" text-yellow-400 text-lg font-bold underline"
                    >
                      {" "}
                      {course.price} <span className="text-[#000524]">LE</span>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-gray-700 w-34">
                      سعر الماده العلميه:
                    </span>
                    <span
                      dir="ltr"
                      className=" text-yellow-400 text-lg font-bold underline"
                    >
                      {" "}
                      {course.materialPrice} <span className="text-[#000524]">LE</span>
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#000524] mb-4">
                    محتويات البرنامج:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {course.content.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mx-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-5 items-center">
                                    <button
                    onClick={handelAdd}
                    className={` cursor-pointer text-3xl md:text-4xl p-1 rounded-full  bg-white text-yellow-500 ${
                      isInFav ? "" : " "
                    }`}
                  >
                    {isInFav ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button
                    onClick={() => navigate("/booking")}
                    className="cursor-pointer w-full border-3 border-[#000524] hover:text-[#000524] bg-[#000524] text-white py-2 md:py-3 rounded-4xl font-semibold text-lg hover:bg-yellow-400 transition-all"
                  >
                    سجل في البرنامج الآن
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default CourseDetails;
