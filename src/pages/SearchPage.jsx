import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CoursesData from "../data.json";
import CourseCard from "../components/CourseCard";
import Transition from "../components/Transition";
import { Helmet } from "react-helmet";

function SearchPage() {
  const location = useLocation();
  // استخدم courses بدلاً من productsData
  const courses = CoursesData.courses;
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("SearchPage - Courses Data:", courses);

  const getSearchQuery = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("query") || "";
  };

  const searchQuery = getSearchQuery();

  useEffect(() => {
    console.log("Search query:", searchQuery);

    if (searchQuery && Array.isArray(courses) && courses.length > 0) {
      setLoading(true);

      const timer = setTimeout(() => {
        try {
          console.log("Searching in courses:", courses);

          const filteredCourses = courses.filter((course) =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          console.log("Search results:", filteredCourses);
          setSearchResults(filteredCourses);
        } catch (error) {
          console.error("Search error:", error);
          setSearchResults([]);
        } finally {
          setLoading(false);
        }
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [searchQuery, courses]);

  return (
    <Transition>
      <Helmet>
        <title>البحث عن الكورسات - American Council</title>
        <meta
          name="description"
          content="ابحث عن الكورسات المناسبة لك في American Council - كورسات الهندسة, البرمجة, اللغات, التصميم. تصفية النتائج حسب المستوى والسعر"
        />
        <meta
          name="keywords"
          content="بحث كورسات, American Council, كورسات هندسة, كورسات برمجة, بحث متقدم, تصفية كورسات"
        />
        <meta
          property="og:title"
          content="البحث عن الكورسات - American Council"
        />
        <meta
          property="og:description"
          content="ابحث عن الكورسات المناسبة بمختلف التخصصات والمستويات"
        />
      </Helmet>
      <div className="bg-gray-300">
        <div className="container mx-auto px-4 py-8 ">
          <div className="mb-4 mx-auto text-center " dir="rtl">
            <h1 className="text-3xl font-bold text-gray-800">
              {searchQuery ? `نتائج البحث عن: "${searchQuery}"` : "صفحة البحث"}
            </h1>
            <p className="text-gray-600 mt-2">
              {loading
                ? "جاري البحث..."
                : searchResults.length > 0
                ? `تم العثور على ${searchResults.length} كورس`
                : searchQuery
                ? "لم يتم العثور على كورسات"
                : "اكتب كلمة للبحث"}
            </p>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}

          {!loading && searchResults.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  bg-gray-300">
              {searchResults.map((course) => (
                <CourseCard course={course} />
              ))}
            </div>
          )}

          {!loading && searchQuery && searchResults.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-[#000524] mb-2">
                لم نجد ما تبحث عنه
              </h3>
              <p className="text-gray-500 mb-6">
                حاول استخدام كلمات بحث مختلفة أو تصفح جميع الكورسات
              </p>
              <Link
                to="/courses"
                className="bg-[#000524] border-3 border-[#000524] text-white px-6 py-3 rounded-2xl hover:bg-yellow-400 hover:border-[#000524] hover:text-[#000524] transition-all duration-300"
              >
                عرض جميع الكورسات
              </Link>
            </div>
          )}

          {!loading && !searchQuery && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👋</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                ابدأ بالبحث عن الكورسات
              </h3>
              <p className="text-gray-500">
                استخدم شريط البحث في الأعلى للعثور على الكورسات التي تريدها
              </p>
            </div>
          )}
        </div>
      </div>{" "}
    </Transition>
  );
}

export default SearchPage;
