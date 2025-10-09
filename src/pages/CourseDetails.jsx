import React from "react";
import { useParams, Link } from "react-router-dom";
import coursesData from "../data.json";
import Transition from "../components/Transition";
import Swal from "sweetalert2";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineAddIcCall } from "react-icons/md";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = coursesData;
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            الكورس غير موجود
          </h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const alert = () => {
    Swal.fire({
      title: "كيفية التسجيل في البرنامج",
      html: `
        <div class="text-right" dir="rtl">
          <p class="mb-4 text-gray-700">للتسجيل في البرنامج  :</p>
          <ol class="list-decimal pr-6 space-y-2 text-gray-700">
            <li>انسخ اسم البرنامج</li>
            <li>أرسل اسم البرنامج إلى رقم الواتساب أدناه</li>
            <li>سيتم الرد عليك في أقرب وقت</li>
            <li>سيتم حجز البرنامج لك في أسرع وقت ممكن</li>
          </ol>
        </div>
      `,
      icon: "info",
      confirmButtonText: "فهمت",
      confirmButtonColor: "#10B981",
      customClass: {
        popup: "rounded-lg shadow-xl",
        title: "text-2xl font-bold text-gray-800",
        confirmButton: "px-6 py-2 rounded-lg font-medium",
      },
    });
  };

  return (
    <Transition>
      <div className=" py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <span>← العودة للرئيسية</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex ">
              <div className="md:flex-1 h-[500px]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full  object-cover"
                />
              </div>

              <div dir="rtl" className="md:flex-1 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
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
                    <span className="text-blue-600 font-medium">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="font-semibold text-gray-700 w-32">
                      سعر الكورس:
                    </span>
                    <span
                      dir="ltr"
                      className=" text-blue-500 text-lg font-bold underline"
                    >
                      {" "}
                      {course.price} <span className="text-gray-500">LE</span>
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    محتويات البرنامج:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {course.content.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mx-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={alert}
                  className="cursor-pointer w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  سجل في البرنامج الآن
                </button>
                <div className="mt-6 flex justify-around items-center px-5">
                  <div className="flex items-center gap-3 text-gray-700 text-xl">
                    <span>واتساب :</span>{" "}
                    <a
                      href="#"
                      className="bg-green-500 p-2 content-center text-center rounded-full text-1xl text-white transition-all duration-[.5s] hover:scale-[1.2] hover:rotate-400"
                    >
                      <ImWhatsapp />{" "}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 text-xl">
                    <span>الدعم :</span>{" "}
                    <a
                      href="#"
                      className="bg-blue-500 p-2 content-center text-center rounded-full text-1xl text-white transition-all duration-[.5s] hover:scale-[1.2] hover:-translate-2"
                    >
                      <MdOutlineAddIcCall />{" "}
                    </a>
                  </div>
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
