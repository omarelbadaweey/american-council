import React from "react";
import CourseCard from "../components/CourseCard";
import coursesData from "../data.json";
import Hero from "../components/Hero";
import Transition from "../components/Transition";
// import { Helmet } from "react-helmet";
import Back from "../components/Back";

const Coures = () => {
  const { courses } = coursesData;

  return (
    <Transition>
      {/* <Helmet>
        <title>كورسات American Council - جميع الكورسات المتاحة</title>
        <meta
          name="description"
          content="استعرض جميع الكورسات المتاحة في American Council بجامعة المنصورة - هندسة, برمجة, لغات, تطوير مهارات"
        />
        <meta
          name="keywords"
          content="كورسات هندسة, كورسات برمجة, كورسات لغات, تدريب, تطوير مهارات, American Council courses"
        />
      </Helmet> */}

      <Back />
      <div className="min-h-screen">
        {/* Courses Section */}
        <section id="courses" className="py-16 bg-gray-300">
          <div className=" mx-auto px-6">
            <h1 className=" relative w-fit mx-auto before:w-full before:bg-yellow-400 before:h-1 before:absolute before:-bottom-5  after:w-7 after:h-7 after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-[50%] after:right-[50%]  after:rounded-full after:bg-gray-300 after:border-3 text-4xl font-bold text-[#000524] text-center mb-12">
              برامجنا التدريبية
            </h1>
            <p className="text-lg text-gray-800 text-center mb-8 font-bold">
              اختر البرنامج المناسب لمستقبلك المهني
            </p>

            <div
              id="courses"
              className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {courses.map((course) => (
                <div className="animation">
                  {" "}
                  <CourseCard key={course.id} course={course} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default Coures;
