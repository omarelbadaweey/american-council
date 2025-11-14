import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CoursesData from "../data.json";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  // الحل: استخدم CoursesData مباشرة إذا لم يكن فيه productsData
  const productsData = CoursesData.courses;
  const [search, setSearch] = useState("");
  const [suggesstions, setSuggesstions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null)
  // console.log("Products Data:", productsData);
  console.log("CoursesData:", CoursesData);

  const handelsubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    }
    setSuggesstions([]);
  };

  useEffect(() => {
    // +++
    const searchProducts = () => {
      if (!search.trim()) {
        setSuggesstions([]);
        return;
      }

      if (!Array.isArray(productsData)) {
        setSuggesstions([]);
        return;
      }
      try {
        const filteredProducts = productsData.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );

        setSuggesstions(filteredProducts.slice(0, 5) || []);
      } catch (error) {
        console.error("search error:", error);
        setSuggesstions([]);
      }
    };

    const debounce = setTimeout(() => {
      searchProducts();
    }, 300);

    return () => clearTimeout(debounce);
  }, [search, productsData]);

  useEffect(() => {
    setSuggesstions([]);
  }, [location]);

  // 

    useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSuggesstions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <form
        onSubmit={handelsubmit}
        className=" flex items-center md:pl-6 rounded-full bg-[#000524] border-2 border-yellow-400 h-[40px]"
      >
        <input
        dir="auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search "
          className="h-full px-2 w-[150px] sm:min-w-[150px] md:min-w-[250px] lg:min-w-[300px] focus:none outline-0 bg-transparent text-white"
          aria-label="Search for Courses"
        />
        <button
          type="submit"
          className="min-w-[35px] sm:min-w-[50px] mx-auto flex justify-center items-center cursor-pointer border-l-2 rounded-r-full border-yellow-400 bg-yellow-400 text-[#000524] h-full text-xl"
        >
          <FaSearch />
        </button>

        {/*  */}
      </form>
      {suggesstions.length > 0 && (
        <ul
          className="absolute top-8 min-h-10 left-1/2 -translate-x-1/2 z-[999] bg-[#000524] border-2 border-yellow-400 rounded-lg mt-5 mr-5 shadow-lg   w-[300px] overflow-hidden"
        >
          {suggesstions.map((item) => (
            <Link key={item.id} to={`/courses/${item.id}`}>
              <li
                className="flex items-center p-3 border-b border-blue-400/30 
          last:border-b-0 hover:bg-blue-400/20 transition-colors duration-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-cover rounded mr-2 border border-yellow-400"
                />

                <span className="text-lg text-white">{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
