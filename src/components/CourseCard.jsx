import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext';

const CourseCard = ({ course }) => {
  const {addToFavorite , favItems , removeFromFav} = useContext(CartContext);

  // 
  const isInFav = favItems.some((c) => c.id === course.id)

  // 
  const handelAdd = () => {
    if (isInFav) {
      removeFromFav(course.id)
    } else{
      addToFavorite(course)
    }
  }
 
  // 

  return (
    <div dir='rtl' className=" min-h-[400px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <button onClick={handelAdd} className={` cursor-pointer absolute top-4 right-3 text-3xl border-3 p-1 rounded-full border-yellow-500 bg-white text-yellow-500 ${isInFav? "" : " animate-bounce"}`} >{isInFav?<FaHeart/> :<FaRegHeart />  }</button>
        <div className="absolute top-4 left-4 bg-[#000524] text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
          {course.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#000524] mb-3 text-over-flow">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-over-flow">{course.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-[#000524] mb-2">المحتوى الأساسي:</h4>
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
        
        <div className="flex items-center justify-between">
          <span dir='ltr' className=" text-yellow-400 text-lg font-bold underline"> {course.price} <span className='text-[#000524]'>LE</span></span>
          <Link 
            to={`/courses/${course.id}`}
            className="bg-[#000524] text-yellow-400 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-[#000524] border-2 border-[#000524] transition-colors"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard;